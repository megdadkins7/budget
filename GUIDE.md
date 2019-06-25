## Github Flow

1. make a new branch in GitHub, describing what you plan on tackling
2. in terminal, `git fetch` to get the new branch
3. in terminal `git checkout -b new_branch origin/new_branch` to check out locally
4. make some code edits in VSCode
5. (when ready) `git add -A` to add changes to git
6. `git commit -m 'message'` to create the commit
    1. Optional (do some more work, commit checkpoints are useful if you're doing a few things in a branch)
7. `git push` to push edits back up to origin
8. in GitHub, the new branch should have a **create a PR** button
9. look over the PR changes, and add me as a reviewer
10. Once OK'd, (you, me, either, both) click the **merge** button to merge the PR into master
11. Go back to step 1

## Library Dependencies

- styled-components - the css modules for styling
- react-router - handles app pages

## Folder Structure

A simple project can be set up like this:

    
    node_modules/
    src/
    ├── data.js
    ├── components/
    │   ├── App.js
    │   ├── NewEntry.js
    │   └── Labels.js
    ├── shared/
    │   ├── Button.js
    │   ├── Input.js
    │   └── Tab.js
    ├── pages/
    │   ├── Budget.js
    │   └── Overview.js
    ├── styles/
    │   ├── Highlight.js
    │   ├── Global.js
    │   └── Typography.js
    ├── hooks/
    │   ├── useTabs.js
    │   ├── useLocalStorage.js
    │   └── modalContext.js
    └── lib/
    		├── calcPercent.js
    		└── idToTitleString.js

- `components` - all one-off components go here. this means any component that gets used one time, either by a relationship (`Lists → List`) or by a single parent `BudgetPage -> Budget`. this will be the majority of the components you write, both for presentation and logic
- `shared` - any component that gets used multiple times, like `Button`. these components should be somewhat generic, and only really care about themselves. typically they are presentation only, and/or UI related, as they don't have any ties to the app data directly
- `data` - js or json file that holds the 'initial state' object for dev purposes
- `pages` -  components that define a app page (home, budget, etc). these are your primary components that load the needed children on a single page
- `styles` - generic and global styles that don't pertain to any specific component. this typically won't be a large directory
- `hooks` - you might find yourself using a hook that doesn't belong to any specific component like localStorage. in this case put it here, so any component can import and use the state. same goes for contexts, since contexts are by nature shared across at least 2 components (otherwise why have it?)
- `lib` - the shame folder where all of your random input-output functions live. these are typically utility based, like transforming a string, or mapping an object to another object. if a function has a generic input and a generic output, it could end up here. remember the golden rule though, PCCWU (defined below). only put things here if they are shared

## Rules and Guidelines

- **Golden Rule** - Put code close to where it is used (PCCWU)
- **Golden Rule** - Make it work, Make it pretty, Make it fail-proof (WPF)
- **Golden Rule** - Keep it stupid simple (KISS)

### Where do I write new code related to a component?

PCCWU. If you find that the code needs to be used somewhere else, then we consider moving it out to a shared file (utils, shared component, styles, etc). Odds are, you won't have that much shared code.

### Where do I put a new component?

If you're not sure, put it in `components/` first. If you find yourself importing it in two or more other components, it moves to `shared/`. You might also have to refactor the components props, if its tied too closely to a use case

### Where do I put component styles?

PCCWU, write it in the component first. if it gets too large (you have to scroll too much to get to the component), consider moving it to `ComponentStyles.js` and exporting just the styles. This too, should be fairly rare.

### Where do I keep app State

Above rule again. Start at the smaller piece needed, and put state there. Example:

    function CartItem() {
    	const [state] = useState({
    		id: 'shoes',
    		value: 40,
    		quantity: 2
    	})
    }

If you discover that you need the component state in a diff component, **move the state up to the parent, and pass down parts to the needed components**.

    const items = [{
    	id: 'shoes',
    	value: 40,
    	quantity: 2	
    }]
    
    // needs count of all cart items
    function CartCount(props) {
    	return <div>Total count: {props.count}</div>
    }
    
    // needs single cart item object
    function CartItem(props) {
    	return (
    		<div>
    			{props.id} - Price: {props.value}
    		</div>
    	)
    }
    
    // parent - needs cart count and list of items
    function Cart() {
    	const [state] = useState(items)
    
    	return (
    		<CartCount count={calcTotalQuantity(state)} />
    		{
    			state.map( item =>  <CartItem {...item} /> )	
    		}
    	)
    } 

As time goes on, you might find yourself keeping state at the `App` level in its entirety. This is perfectly fine.

- NOTE: this is something you learn over time. When in doubt, follow the golden rule -PCCWU, and move things out when needed in multiple places.

### When should I use local state in a component?

If the component is doing something only it cares about. A good example is an Input. The state of typing in the input is local to the element itself, the app doesn't care about if someone is typing in an Input. It only cares once an action like AddItem is executed. So keeping Input text state local to the component is perfectly fine.

### Do I need to test my components as I write them?

Ehh... that's a personal call. Testing has the benefit of making you think more about your functions and edge cases, but has the downside of potentially over-engineering (my function handles all possible argument cases... but it only ever gets numbers, and they are always defined), and coding slowdown (one function takes x3 time to test). **When you are starting out I encourage you to just write code**. Testing is great to practice, but can boggle down productivity if you don't have experience keeping focus on the main goal.

### What about Responsive/Mobile?

WPF. Mobile can be an afterthought here, the goal is to make an app that does stuff. If it looks great on the phone but doesn't do anything... well...?

### My function feels too big / confusing!

KISS. If you find yourself doing too much in one place, start breaking it out into smaller parts. 

### Should this be a ternary, or a switch, or an object map?

KISS → WPF. If in doubt, write it as ugly as possible and make sure it works. Then, consider a single pass at some prettying (if/else into a ternary maybe). Once done, move on. You aren't supposed to be writing perfect code, you want to write code that does something.

### Do I use a named function or an arrow function

This is more of a personal preference. Arrow functions aren't hoisted, so if you want to declare it at the bottom of the file, and use at the top, you cant. named functions are more verbose, especially if it's just returning something. If you need a rule for peace of mind:

- If your function does a transformation and returns something, arrow
- If your function takes in args, and changes some Component fields, or runs other functions, named function

[Category Page Steps](https://www.notion.so/71ae9d76a19b48b3b4522214f28fb92f)
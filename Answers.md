1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?

.map(), .reduce(), .filter()

 Which method do we use to create a new object while extending the properties of another object?

.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: stores action types and payload. They are dispatched to the reducer
reducers: keeps track of current state and a given action. It is the intermediary between actions and store, processing the info. They don't update the state, but rather return new object.

store: keeps track of state. Everything that changes in the app is represented by the store which is a single JS object.

It is the 'single source of truth' because it is the one place that holds state in Redux and what is always being refered back to.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global state vs Component state which is specific to that component. When we are using redux we are dealing with application state. A good time to use component state might be when we want to change state without affecting the store or the whole app.

1.  What is middleware?
middleware is something that you literally are putting in the middle of a program. So it intercepts a process, runs a functtion, and then usually contimues the process

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
it allows us to run asynchronous operations inside action creators. It lets us make API calls from our action creators


1.  Which `react-redux` method links up our `components` with our `redux store`?

connect

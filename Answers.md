 What problem does the context API help solve?

    Context API is a way for a child components to access a value that is inside a parent component. Context API solves the problem of prop drilling.

 In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are payloads of info that send data from the application to the store. Reducers specify how the app's state changes in response to actions sent to the store. The store: holds application state data, allows access to state, allows state to be updated, registers and unregisters listeners. The store is known as a "single source of truth" because there can only one store in the App.

 What is the difference between Application state and Component state? When would be a good time to use one over the other?


    Application state is global and component state is local. App state would be useful if your entire component needed access to data and component for data that would only be used inside a component or its child.

 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    Redux thunk is a middleware that allows you to call action creators which return a funtion instead of an object.

 What is your favorite state management system you've learned and this sprint? Please explain why!

    I am not sure which state management is my favourite. I think redux with hooks simplifies using redux as whole.

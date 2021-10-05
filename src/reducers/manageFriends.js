let state = { friends: [] }

manageFriends(state, {type: "ADD_FRIEND",
    friend: {
        name: "Chrome Boi",
        hometown: "NYC",
        id: 1,
    },
});

manageFriends(state, { type: "REMOVE_FRIEND",
id: 1, });

export function manageFriends(state, action){
    
    switch (action.type) {
        case "ADD_FRIEND":
            return { friends: [...state.friends, action.friend] };
        case "REMOVE_FRIEND":
            return {friends: state.friends.filter(friend => friend.id !== action.id)}
        default:
            return state;
        }

    }

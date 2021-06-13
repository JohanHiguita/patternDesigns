//IIFE
const res = (() => {
    const resource = "https://jsonplaceholder.typicode.com/users"; // private API

    return {
        list: async () => {
            return await fetch(resource).then(x => x.json())
        },
        create: async (data) => {
            return await fetch(resource, {type:"POST", body: JSON.stringify(data)})
            .then(x => x.json())
        }
    }
    
})();

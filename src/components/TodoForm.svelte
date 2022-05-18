
<script>
    import { user } from '../stores/authStore';
    import { addTodo } from '../stores/todoStore';
    
    let text = '';

    const handleSubmit = () =>{
        console.log("Submitting ....");
        addTodo(text, $user.id);
        text = '';
    }
    
</script>

<form class="my-6" on:submit|preventDefault="{handleSubmit}">

    <div class="flex flex-col text-sm mb-2">
        <label for="todo" class="font-bold mb-2 text-gray-800">Todo</label>
        <input 
        type="text" 
        bind:value={text}
        name="todo" 
        class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focuse:border-gray-500 rounded-lg" 
        placeholder="What you are gonna do ?">
    </div>

    <button 
    type="submit" 
    class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Submit</button>
    
</form>
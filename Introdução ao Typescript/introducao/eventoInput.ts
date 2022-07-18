const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (Event) => {
    const i = Event.currentTarget as HTMLInputElement;
    console.log(i.value);
});
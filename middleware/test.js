export default function (context) {
  context.$axios
    .$post("https://jsonplaceholder.typicode.com/todos/1'")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

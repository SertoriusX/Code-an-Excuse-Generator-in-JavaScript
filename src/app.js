function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  let whoItem = who[Math.floor(Math.random() * who.length)];
  let actionItem = action[Math.floor(Math.random() * action.length)];
  let whatItem = what[Math.floor(Math.random() * what.length)];
  let whenItem = when[Math.floor(Math.random() * when.length)];
  return `

<div class="text-body">
<h1 >OMG! you will not believe me but ...</h1>
${whoItem} ${actionItem} ${whatItem} ${whenItem}
</div>`;
}

window.onload = function () {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
  

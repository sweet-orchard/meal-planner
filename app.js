const DAYS = [
  { tab: "Tue 13", title: "Tuesday 13", sub: "Media Studio 10:00, graduation 16:15–17:45",
    prep: "07:15–08:15: make the lunches. Marinate the chicken (soy sauce, honey, garlic, grated ginger), chop the stir-fry veg, and pour Greek yogurt with berries into the ice-lolly mould. About 5 minutes.",
    meals: [
      ["Breakfast", "You: overnight oats with Greek yogurt, milk, grated apple, cinnamon and frozen raspberries.", "Anna: eggs with chicken sausage. Ivan and your brother: eggs or twaróg on toast, plus a banana."],
      ["Your lunch", "Salmon fillet with Philadelphia on seeded bread, cucumber, cherry tomatoes, the last of the kimchi, and an apple."],
      ["Brother's lunch", "Twaróg and herb sandwich (twaróg, spring onion, dill), plus an easy-peeler."],
      ["Children's snack", "Apple slices with cheese cubes."],
      ["Dinner · 18:00", "Honey-garlic chicken stir-fry with rice, peppers, broccoli and carrot, topped with spring onion and sesame.", "Cook extra rice and chicken for tomorrow's lunch. Ivan and Anna get a “takeaway box” with plain veg and sauce on the side."],
      ["Pudding", "Baked apples with cinnamon and honey, done in the oven while you cook. Children can have a spoon of custard."]
    ] },
  { tab: "Wed 14", title: "Wednesday 14", sub: "Uni 10:00–15:30, Luton drive from 16:15",
    prep: "07:00–08:45: cook a big pot of borscht (about 10 portions) with frozen beetroot, stewed beef, potatoes, cabbage, onion, tinned tomatoes and borscht seasoning. Cool in shallow boxes and refrigerate before you leave.",
    meals: [
      ["Breakfast", "You: avocado and boiled egg on seeded toast.", "Anna: eggs with a hotdog. Ivan: toast with egg, or porridge with banana."],
      ["Your lunch", "Last night's chicken-rice bowl with kimchi (eat within 24 hours), plus Greek yogurt with berries."],
      ["Brother's lunch", "Tuna and sweetcorn sandwich (tuna tin 1)."],
      ["Drive box", "Canned chicken and cream cheese wraps with leaves and cucumber, cherry tomatoes, grapes, almonds and dates, and water."],
      ["Dinner", "Borscht reheated until steaming hot, with soured cream and bread. Served by your brother.", "Night-before job: move the frozen mince to the fridge, on a plate on the bottom shelf."]
    ] },
  { tab: "Thu 15", title: "Thursday 15", sub: "Uni 10:00–13:00, home about 14:45 · 5 people",
    prep: "Afternoon baking session 15:00–17:00: assemble the lasagne, bake the twaróg sernik, bake the oat-and-fruit bars in the same oven. Shop 2 in the evening.",
    meals: [
      ["Breakfast", "Porridge for everyone with tinned peaches or berries and cinnamon. Anna has her eggs."],
      ["Your lunch", "Tuna lavash wrap (tuna tin 2) with cream cheese, cucumber, tomato, leaves and mustard, plus carrot sticks."],
      ["Brother's lunch", "Egg mayo sandwich."],
      ["Baking", "Lasagne filling (mince, tinned green lentils, frozen diced carrots, tinned tomatoes), chilled for tomorrow. Sernik: about 1 kg twaróg, eggs, semolina, vanilla sugar, raisins, a little lemon."],
      ["Dinner", "Borscht, day two, with garlic bread and a cucumber and tomato salad."]
    ] },
  { tab: "Fri 16", title: "Friday 16", sub: "Uni 10:00–17:00, drive 17:15–18:15",
    prep: "17:30: your brother puts the lasagne in the oven for 45–50 minutes, so it's ready when you get home.",
    meals: [
      ["Breakfast", "Greek yogurt bowls with berries and a crumbled oat bar. Anna has her eggs."],
      ["Your lunch box", "2 boiled eggs, a canned chicken and cream cheese wrap with leaves, pepper and cucumber sticks, an oat bar and an apple."],
      ["Brother's lunch", "Pink salmon mayo sandwich."],
      ["Dinner", "Lasagne with a spinach, cucumber and tomato salad.", "Anna: a cheesy corner piece. Ivan: bread on the side."],
      ["Relax night", "Family film night with one planned shop treat each, served in a bowl, plus homemade popcorn. Sernik for pudding."]
    ] },
  { tab: "Sat 17", title: "Saturday 17", sub: "At home · 5 people",
    prep: "Sushi day. Make just enough rice and don't keep leftover sushi rice.",
    meals: [
      ["Breakfast · 09:00", "Shakshuka: eggs in a sauce of tinned tomatoes, peppers, onion, cumin and paprika, with bread.", "Anna: plain eggs plus a sausage. Ivan: egg with toast soldiers."],
      ["Lunch · 12:30", "Sushi and kimbap party. Sushi rice with rice vinegar and nori. Fillings: smoked salmon, avocado, cucumber, carrot, omelette strips, tuna mayo, hotdog strips. Soy sauce, plus kimchi for you.", "Everyone rolls their own. This is the children's challenge for the day."],
      ["Afternoon", "Apple and oat crumble with custard from stock."],
      ["Dinner · 18:00", "Buckwheat with chicken, mushrooms, carrot and onion (по-купечески), with a cucumber and tomato salad.", "Ivan and Anna: buckwheat with butter and chicken pieces, bread as backup."]
    ] },
  { tab: "Sun 18", title: "Sunday 18", sub: "Mosque 15:00–17:00 · 5 people",
    prep: "Morning: make the pizza dough and sauce, and chop the plov meat and veg into boxes in the fridge. Sunday night: move the hake to the fridge.",
    meals: [
      ["Breakfast", "Brother, Ivan, Anna and Mum: syrniki (about 500 g twaróg) with soured cream, honey or berries.", "You: a yogurt bowl, or avocado toast with egg."],
      ["Lunch · 12:30", "Build-your-own pizza: peppers, mushrooms, sweetcorn, spinach, hotdog, mozzarella. Yours can be veg-loaded with chilli."],
      ["Dinner · 17:15", "Plov with chicken, plenty of carrot, garlic and rice, with a tomato, cucumber and onion salad.", "Cool leftovers within 1 hour."]
    ] },
  { tab: "Mon 19", title: "Monday 19", sub: "4 people",
    prep: "Overnight oats made on Sunday night.",
    meals: [
      ["Breakfast", "You: overnight oats. Anna: eggs with a sausage. Others: porridge or toast."],
      ["Brother's lunch", "Egg and cheese sandwich, plus fruit."],
      ["Your lunch", "Plov, reheated once until steaming hot, with salad."],
      ["Dinner", "Fakeaway fish burgers: hake coated in crumbs from the frozen pizza crusts plus panko, baked, in buns with lettuce and Greek-yogurt tartare (yogurt, pickles, lemon, dill). Oven wedges and coleslaw.", "Ivan: a “McDonald's-style” bridge. Anna: fish pieces with wedges and ketchup."],
      ["Pudding", "The yogurt ice lollies."]
    ] }
];

const SHOPS = [
  { title: "Shop 1 · Monday 12 evening", sub: "For Tuesday to Thursday, plus chicken to freeze", total: "about £47", rows: [
    ["Chicken thigh fillets 1 kg (stir-fry, Saturday buckwheat)", "£7.25"],
    ["Chicken thighs on the bone 1 kg (Sunday plov; freeze tonight)", "£2.99"],
    ["Large free-range eggs, 12", "£3.30"],
    ["Greek-style natural yogurt 1 kg", "£1.70"],
    ["Frozen raspberries 300 g", "£3.00"],
    ["Avocados × 2", "£1.38"],
    ["Mixed peppers, 3 pack", "£0.96"],
    ["Cucumbers × 2", "£1.98"],
    ["Cherry tomatoes 250 g", "£0.62"],
    ["Baby spinach 250 g", "£1.30"],
    ["Potatoes 2.5 kg (borscht, wedges)", "£1.29"],
    ["White cabbage", "£0.89"],
    ["Carrots 1 kg", "£0.69"],
    ["Brown onions 1 kg (if you have fewer than about 8)", "£0.95"],
    ["Braeburn apples × 2 packs", "£3.60"],
    ["Bananas, 5 pack", "£0.78"],
    ["Grapes", "about £2.00 (est.)"],
    ["Kimchi 300 g", "£3.50"],
    ["Mature cheddar 400 g", "£2.95"],
    ["Philadelphia 180 g (or cheaper own-brand)", "£2.20"],
    ["Tortilla wraps, 8 pack", "£0.99"],
    ["Hi Fibre Seed loaf 800 g (your bread)", "£1.55"],
    ["Lightly seeded white loaf 800 g (sandwiches)", "£0.79"]
  ], note: "Prefer halal chicken? Tesco's halal boneless thighs are £8.10/kg." },
  { title: "Shop 2 · Thursday 15 evening", sub: "For Friday and Saturday", total: "about £29, plus treats", rows: [
    ["Large free-range eggs, 12", "£3.30"],
    ["Greek-style natural yogurt 1 kg", "£1.70"],
    ["Kefir 1 L (Mlekovita)", "£2.20"],
    ["Avocados × 2 (sushi)", "£1.38"],
    ["Sushi rice 500 g", "£2.25"],
    ["Nori sheets × 2 packs (10 sheets)", "£4.20"],
    ["Smoked salmon 100 g", "£3.80"],
    ["Closed-cup mushrooms 300 g", "£0.97"],
    ["Buckwheat 500 g", "£2.70"],
    ["Cucumber, cherry tomatoes, spinach", "£2.91"],
    ["Popcorn kernels 500 g", "£1.00"],
    ["Bananas and apples", "£2.58"],
    ["Friday film-night treats (your choice)", "e.g. £5"]
  ] },
  { title: "Shop 3 · Saturday 17 evening", sub: "For Sunday and Monday", total: "about £10", rows: [
    ["Grated mozzarella 250 g (pizza)", "£2.50"],
    ["Mixed peppers, 3 pack (pizza)", "£0.96"],
    ["Dried yeast, 1 sachet or small tin", "about £1.00 (est.)"],
    ["Burger buns (Monday fish burgers)", "about £1.25 (est.)"],
    ["Lightly seeded white loaf", "£0.79"],
    ["Cucumber and cherry tomatoes (plov salad)", "£1.61"],
    ["Bananas and easy-peelers", "about £2.30 (est.)"]
  ] }
];

const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };

// Day tabs
const tabs = document.getElementById("tabs");
const panel = document.getElementById("day");
function showDay(i) {
  [...tabs.children].forEach((b, j) => b.setAttribute("aria-selected", j === i));
  const d = DAYS[i];
  panel.innerHTML = `<h3>${d.title}</h3><p class="sub">${d.sub}</p>
    <dl class="meal" style="border-top:0;display:block"><div class="meal" style="border-top:1px solid var(--coral-300)"><dt>Prep</dt><dd>${d.prep}</dd></div></dl>
    <dl style="margin:0">${d.meals.map(([k, v, extra]) =>
      `<div class="meal"><dt>${k}</dt><dd>${v}${extra ? `<small>${extra}</small>` : ""}</dd></div>`).join("")}</dl>`;
}
DAYS.forEach((d, i) => {
  const b = el("button", "tab", d.tab);
  b.setAttribute("role", "tab");
  b.onclick = () => showDay(i);
  tabs.appendChild(b);
});
showDay(0);

// Shopping
const shops = document.getElementById("shops");
SHOPS.forEach(s => {
  const w = el("div", "shop");
  w.innerHTML = `<h3>${s.title}</h3><p>${s.sub}</p>
    <div class="table-scroll"><table><thead><tr><th>Item</th><th>Tesco price</th></tr></thead><tbody>
    ${s.rows.map(r => `<tr><td>${r[0]}</td><td class="price">${r[1]}</td></tr>`).join("")}
    <tr class="total"><td>Total</td><td class="price">${s.total}</td></tr></tbody></table></div>
    ${s.note ? `<p style="margin-top:12px">${s.note}</p>` : ""}`;
  shops.appendChild(w);
});

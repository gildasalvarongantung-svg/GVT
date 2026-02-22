fetch("data.json")
.then(res => res.json())
.then(data => {

let table = document.getElementById("table");

table.innerHTML = `
<tr>
<th>#</th>
<th>Player</th>
<th>Points</th>
<th>Played</th>
</tr>
`;

data.players
.sort((a,b)=>b.points-a.points)
.forEach((p,i)=>{
let row = table.insertRow();
row.innerHTML = `
<td>${i+1}</td>
<td>${p.name}</td>
<td>${p.points}</td>
<td>${p.played}</td>
`;
});

let matchBox = document.getElementById("matches");

data.matches.forEach(m=>{
let div = document.createElement("div");
div.className="match";
div.innerHTML = `${m.p1} ${m.s1} - ${m.s2} ${m.p2}`;
matchBox.appendChild(div);
});

});

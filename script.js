fetch("data.json")
.then(res => res.json())
.then(data => {

let leaderboard = document.getElementById("leaderboard");

leaderboard.innerHTML = `
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
let row = leaderboard.insertRow();
row.innerHTML = `
<td><span class="rank">${i+1}</span></td>
<td>${p.name}</td>
<td>${p.points}</td>
<td>${p.played}</td>
`;
});

let matchesBox = document.getElementById("matches");

data.matches.forEach(m=>{
let div = document.createElement("div");
div.className = "match";

div.innerHTML = `
<span class="table">Table ${m.table}</span>
<span>${m.p1} ${m.s1} - ${m.s2} ${m.p2}</span>
`;

matchesBox.appendChild(div);
});

});

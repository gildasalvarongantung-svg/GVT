async function loadData(){
const res = await fetch("data.json?cache=" + Date.now());
const data = await res.json();

let leaderboard = document.getElementById("leaderboard");

leaderboard.innerHTML = `
<tr>
<th>#</th>
<th>Player</th>
<th>Pts</th>
<th>P</th>
<th>W</th>
<th>L</th>
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
<td>${p.wins}</td>
<td>${p.loss}</td>
`;
});

let matches = document.getElementById("matches");
matches.innerHTML="";

data.matches.forEach(m=>{
let div=document.createElement("div");
div.className="match";

let statusClass =
m.status === "LIVE"
? "live"
: "finished";

div.innerHTML=`
<span class="table">Table ${m.table}</span>
<span>${m.player1} ${m.score1} - ${m.score2} ${m.player2}</span>
<span class="${statusClass}">${m.status}</span>
`;

matches.appendChild(div);
});

setTimeout(loadData, data.refresh * 15);
}

loadData();

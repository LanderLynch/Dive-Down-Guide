/* ═══════════════════════════════════════════
   DIVE DOWN GUIDE — ALL DATA + ALL LOGIC
   ═══════════════════════════════════════════ */

const icon = n => `./fish-icons/${n.toLowerCase().replace(/\s+/g,"-").replace(/'/g,"")}.png`;
const slug = v => v.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const fid  = e => `${slug(e.zone)}-${slug(e.fish)}`;
const badge = r => r ? `<span class="badge rarity-${r.toLowerCase().replace(/[^a-z0-9]+/g,"-")}">${r}</span>` : '';

/* ── FISH DATABASE ── */
const F = [
  ["Sunlight Zone","Goldfish","Common","Basic early-game catch in the first zone."],
  ["Sunlight Zone","Butterflyfish","Rare","Common low-depth rare spawn."],
  ["Sunlight Zone","Piranha","Rare","Low-zone rare fish."],
  ["Sunlight Zone","Pufferfish","Epic","Early-zone epic catch."],
  ["Sunlight Zone","Koi","Epic","Valuable early epic fish."],
  ["Sunlight Zone","Stingray","Legendary","High-value Divine path fish from the first biome set."],
  ["Coral Reef","Clownfish","Common","Reliable early Coral Reef catch."],
  ["Coral Reef","Blue Tang","Common","Common reef fish for quick collection progress."],
  ["Coral Reef","Lionfish","Rare","Required for Rebirth 2."],
  ["Coral Reef","Seahorse","Epic","Required for Rebirth 2."],
  ["Coral Reef","Bettafish","Epic","High-value reef catch."],
  ["Coral Reef","Turtle","Legendary","Legendary Coral Reef milestone fish."],
  ["Coral Reef","Shark","Legendary","One of the strongest early predator catches."],
  ["Twilight Zone","Catfish","Common","Common Twilight catch."],
  ["Twilight Zone","Bass","Rare","Reliable rare from this biome."],
  ["Twilight Zone","Salmon","Rare","Mid-tier Twilight collection fish."],
  ["Twilight Zone","Swordfish","Epic","Strong progression catch before legendaries."],
  ["Twilight Zone","Eel","Legendary","Required for Rebirth 3."],
  ["Twilight Zone","Seal","Legendary","Required for Rebirth 3."],
  ["Twilight Zone","Jellyfish","Mythical","First biome where Mythical fish appear."],
  ["Twilight Zone","Dolphin","Divine","Update 8 Divine fish and new best Twilight Zone catch for beginners."],
  ["Deep Ocean","Parrotfish","Common","Baseline Deep Ocean fish."],
  ["Deep Ocean","Mahi-Mahi","Rare","Fast value catch in this biome."],
  ["Deep Ocean","Sunfish","Rare","Useful rare while farming the zone."],
  ["Deep Ocean","Tuna","Epic","Epic Deep Ocean fish with good value."],
  ["Deep Ocean","Squid","Legendary","Legendary benchmark before Mythicals."],
  ["Deep Ocean","Hammerhead","Mythical","Required for Rebirth 4."],
  ["Deep Ocean","Narwhal","Mythical","Required for Rebirth 4."],
  ["The Deep Dark","Shrimp","Common","Required for Rebirth 5."],
  ["The Deep Dark","Rockfish","Rare","Starter rare in The Deep Dark."],
  ["The Deep Dark","Slickhead","Epic","Epic fish for deeper progression."],
  ["The Deep Dark","Gulper Eel","Legendary","Legendary fish for late-game farming."],
  ["The Deep Dark","Blobfish","Epic","Strong Epic catch from this zone."],
  ["The Deep Dark","Anglerfish","Mythical","Required for Rebirth 5."],
  ["The Deep Dark","Whale","Secret","Secret fish tied to this biome."],
  ["The Trenches","Telescopefish","Common","Common trenches fish."],
  ["The Trenches","Macropinna","Epic","Popular Epic trenches catch."],
  ["The Trenches","Spinyfish","Rare","Rare trenches fish."],
  ["The Trenches","Fangtooth","Rare","Rare predator catch."],
  ["The Trenches","Hatchetfish","Legendary","Legendary trenches milestone."],
  ["The Trenches","Lizardfish","Epic","Epic fish from the trenches set."],
  ["The Trenches","Snailfish","Legendary","Important legendary for endgame."],
  ["The Trenches","Whalefish","Mythical","Required for Rebirth 6."],
  ["Atlantis","Crabfish","Common","Common Atlantis catch."],
  ["Atlantis","Cloudfish","Epic","Epic Atlantis fish."],
  ["Atlantis","Polkafish","Rare","Rare fish from Atlantis."],
  ["Atlantis","Rubyfish","Mythical","Mythical Atlantis grind target."],
  ["Atlantis","Pebblefish","Legendary","Legendary catch before Divine farming."],
  ["Atlantis","Peeber","Secret","Secret Atlantis fish."],
  ["Atlantis","Mermaid","Divine","Spawns after catching enough fish. Buy Luck in the shop."],
  ["Aqua Forest","Kelpy","Common","Common catch in Aqua Forest."],
  ["Aqua Forest","Muncher","Rare","Rare Aqua Forest fish."],
  ["Aqua Forest","Fernback","Rare","Rare forest biome fish."],
  ["Aqua Forest","Paddleleaf","Epic","Epic Aqua Forest catch."],
  ["Aqua Forest","Shroomster","Legendary","Legendary fish from the forest biome."],
  ["Aqua Forest","Weerfish","Mythical","High-value Mythical from Aqua Forest."],
  ["Aqua Forest","Grooty","Secret","Secret Aqua Forest fish."],
  ["Shell Reef","Nautilus","Common","Common shell biome fish."],
  ["Shell Reef","Shellfin","Common","Common Shell Reef fish."],
  ["Shell Reef","Whorlig","Rare","Rare Shell Reef fish."],
  ["Shell Reef","Snailshell","Epic","Epic shell biome catch."],
  ["Shell Reef","Twistopus","Legendary","Legendary Shell Reef fish."],
  ["Shell Reef","Yapclam","Mythical","Mythical Shell Reef grind target."],
  ["Shell Reef","Unishell","Divine","Spawns after catching enough fish. Buy Luck in the shop."],
  ["Kraken World","Skelfin","Common","Base fish for Kraken World farming."],
  ["Kraken World","Bitey","Rare","Rare Kraken World fish."],
  ["Kraken World","Riffjaw","Epic","Epic catch from Kraken World."],
  ["Kraken World","Slimer","Legendary","Legendary Kraken World fish."],
  ["Kraken World","Globby","Legendary","Late-game legendary catch."],
  ["Kraken World","Licklid","Mythical","Required for Rebirth 10."],
  ["Kraken World","Shoober","Secret","Required for Rebirth 10."],
  ["Megalodon's Lair","Bull Shark","Epic","Aggressive shark catch."],
  ["Megalodon's Lair","Tiger Shark","Epic","Powerful Epic shark."],
  ["Megalodon's Lair","Whale Shark","Epic","Large Epic shark catch."],
  ["Megalodon's Lair","Great White Shark","Mythical","Top predator catch."],
  ["Megalodon's Lair","Thresher Shark","Mythical","High-tier shark."],
  ["The Arctic","Otter","Epic","Epic Arctic catch."],
  ["The Arctic","Penguin","Epic","Epic cold-zone catch."],
  ["The Arctic","Beluga Whale","Legendary","Legendary whale from the frozen biome."],
  ["The Arctic","Walrus","Legendary","Legendary Arctic fish."],
  ["The Arctic","Orca","Mythical","Mythical predator from The Arctic."],
  ["The Arctic","Blue Whale","Secret","Secret Arctic catch."],
  ["The Arctic","Polar Bear","Secret","Secret Arctic catch."],
  ["OP Kraken Egg Fish","Bobble Kraken","Mythical","Robux shop or quest egg fish."],
  ["OP Kraken Egg Fish","Puddle Kraken","Mythical","Robux shop or quest egg fish."],
  ["OP Kraken Egg Fish","Tangle Kraken","Secret","Rare Kraken egg special."],
  ["OP Kraken Egg Fish","Sentinel Kraken","Secret","High-tier Kraken egg special."],
  ["OP Kraken Egg Fish","Crown Kraken","Divine","Top-tier Divine Kraken egg fish."],
  ["Shark Egg","Bull Shark","Epic","Robux Shark Egg fish."],
  ["Shark Egg","Tiger Shark","Epic","Robux Shark Egg fish."],
  ["Shark Egg","Whale Shark","Epic","Robux Shark Egg fish."],
  ["Shark Egg","Thresher Shark","Mythical","Robux Shark Egg fish."],
  ["Shark Egg","Megalodon","Divine","Divine Robux Shark Egg fish."],
  ["Limited","Cake Fish","Limited","Daily Fish Event (Ended)."],
  ["Limited","Gift Fish","Limited","Daily Fish Event (Ended)."],
  ["Limited","Heart Fish","Limited","Daily Fish Event (Ended)."],
  ["Limited","Partybottle Fish","Limited","Daily Fish Event (Ended)."],
  ["Limited","Partyhat Fish","Limited","Daily Fish Event (Ended)."],
  ["Limited","Wheel Fish","Limited","Obtained from Wheel Spins."],
  ["Limited","UsernameFish","Limited","Admin Abuse exclusive."],
  ["Limited","UsernameMermaid","Limited","Admin Abuse exclusive custom mermaid."]
].map(([zone,fish,rarity,note])=>({zone,fish,rarity,note,icon:icon(fish)}));

const specials = new Set(["OP Kraken Egg Fish","Shark Egg","Limited"]);
const grouped = {};
F.forEach(e=>(grouped[e.zone]=grouped[e.zone]||[]).push(e));
const lookup = {};
F.forEach(e=>{lookup[e.fish.toLowerCase()]=e;});

/* ── REBIRTH DATA ── */
const R = [
  {tier:"Rebirth 1",badge:"R1",money:"$5,000",fish:["Goldfish"],rewards:["+1 Swim Speed","+5 Backpack Space","+0.10x Cash Multiplier"]},
  {tier:"Rebirth 2",badge:"R2",money:"$50,000",fish:["Lionfish","Seahorse"],rewards:["+1 Swim Speed","+5 Backpack Space","+0.15x Cash Multiplier"]},
  {tier:"Rebirth 3",badge:"R3",money:"$500,000",fish:["Eel","Seal"],rewards:["+2 Swim Speed","+10 Backpack Space","+0.15x Cash Multiplier"]},
  {tier:"Rebirth 4",badge:"R4",money:"$10,000,000",fish:["Hammerhead","Narwhal"],rewards:["+2 Swim Speed","+10 Backpack Space","+0.20x Cash Multiplier"]},
  {tier:"Rebirth 5",badge:"R5",money:"$100,000,000",fish:["Shrimp","Anglerfish"],rewards:["+2 Swim Speed","+15 Backpack Space","+0.20x Cash Multiplier"]},
  {tier:"Rebirth 6",badge:"R6",money:"$500,000,000",fish:["Whalefish"],rewards:["+3 Swim Speed","+15 Backpack Space","+0.25x Cash Multiplier"]},
  {tier:"Rebirth 7",badge:"R7",money:"$2,500,000,000",fish:["Mermaid"],rewards:["+3 Swim Speed","+20 Backpack Space","+0.25x Cash Multiplier"]},
  {tier:"Rebirth 8",badge:"R8",money:"$10,000,000,000",fish:["Weerfish","Grooty"],rewards:["+4 Swim Speed","+30 Backpack Space","+0.30x Cash Multiplier"]},
  {tier:"Rebirth 9",badge:"R9",money:"$50,000,000,000",fish:["Unishell"],rewards:["+4 Swim Speed","+40 Backpack Space","+0.30x Cash Multiplier"]},
  {tier:"Rebirth 10",badge:"R10",money:"$500,000,000,000",fish:["Licklid","Shoober"],rewards:["+6 Swim Speed","+75 Backpack Space","+0.35x Cash Multiplier"]}
];

const FAQ = [
  ["When do Secrets and Divines spawn?","Secret spawns are completely random. By collecting fish in that area, it increases the chance of a Secret or Divine to spawn!"],
  ["Is there a cooldown on Secret or Divine spawns?","No, there is no cooldown timers for Secret or Divine fish to spawn."],
  ["Will I lose all my fish or money if I Rebirth?","No! You do not lose anything when you rebirth other than the money and fish required for each rebirth."],
  ["When is Admin Abuse?","Admin abuse is before updates. They will be announced in this Discord."],
  ["Do mutations stack? Can I get more than one mutation on a fish?","No, currently fish can only have one mutation. Example: If your fish has Rainbow, gold, or silver, it cannot receive other mutations like chocolate, shocked, or frozen."],
  ["Can I trade fish?","Trading is not currently in the game. Currently, the only way to transfer fish from one person to another is to steal it using Robux."],
  ["I followed the steps to get my group reward fish, why haven't I received it yet?","Receiving your group reward can take a few minutes. Be patient, and you will receive it in no time."],
  ["Are there any Codes for Dive Down?","No, there are currently no codes, but that is one of the many things our Dev Team is working on!"],
  ["How do I get more Secrets to spawn?","Catching fish in the area you want a secret to spawn in rapidly increases the chances of secrets to spawn."]
];

const GALLERY = [
  "./photos/2a909-17718318971280-1920.webp",
  "./photos/noFilter.webp",
  "./photos/noFilter (1).webp",
  "./photos/wiki/game-thumbnail.png",
  "./photos/wiki/kraken.png",
  "./photos/wiki/free-group-fish.png",
  "./photos/wiki/scuba-guy.png"
];

/* ═══════ PAGE SWITCHING ═══════ */
const pageHome = document.getElementById('pageHome');
const pageRebirth = document.getElementById('pageRebirth');

function showHome(){
  pageHome.style.display='';
  pageRebirth.style.display='none';
  window.scrollTo(0,0);
  buildSidebarHome();
}
function showRebirth(){
  pageHome.style.display='none';
  pageRebirth.style.display='';
  window.scrollTo(0,0);
  buildSidebarRebirth();
}

/* ═══════ SIDEBAR ═══════ */
const sidebarNav = document.getElementById('sidebarNav');

function buildSidebarHome(){
  let h = navLink('Home','#home') + navLink('Mutations','#mutation-guide');
  h += '<div class="nav-label">Biomes</div>';
  Object.keys(grouped).filter(z=>!specials.has(z)).forEach(z=>{h+=navLink(z,'#'+slug(z));});
  h += '<div class="nav-label">Special</div>';
  Object.keys(grouped).filter(z=>specials.has(z)).forEach(z=>{h+=navLink(z,'#'+slug(z));});
  h += '<div class="nav-label">Help</div>' + navLink('Tips & Tricks','#tips') + navLink('Update 8 Devlog','#devlog') + navLink('FAQs','#faq');
  h += '<div class="nav-label">More</div><button class="nav-link" id="navRebirth">Rebirth Guide</button>';
  h += '<div class="nav-footer">Created by Monaco_m2</div>';
  sidebarNav.innerHTML = h;
  document.getElementById('navRebirth').onclick = (e)=>{e.preventDefault();showRebirth();closeMobile();};
  sidebarNav.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{e.preventDefault();closeMobile();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'});});
  });
}

function buildSidebarRebirth(){
  let h = '<button class="nav-link" id="navBack">Fish Database</button>';
  h += navLink('Overview','#rebirth-home') + navLink('Rebirth Levels','#rebirth-list') + navLink('Final Totals','#rebirth-totals');
  h += '<div class="nav-footer">Created by Monaco_m2</div>';
  sidebarNav.innerHTML = h;
  document.getElementById('navBack').onclick = (e)=>{e.preventDefault();showHome();closeMobile();};
  sidebarNav.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{e.preventDefault();closeMobile();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'});});
  });
}

function navLink(text,href){ return `<a href="${href}" class="nav-link">${text}</a>`; }

/* ═══════ RENDER HOME ═══════ */
// Stats
document.getElementById('statPills').innerHTML =
  `<div class="stat-pill"><strong>${F.length}</strong> Fish</div>` +
  `<div class="stat-pill"><strong>${Object.keys(grouped).length}</strong> Zones</div>` +
  `<div class="stat-pill"><strong>10</strong> Rebirths</div>`;

// Gallery
const gt = document.getElementById('galleryTrack');
const imgs = [...GALLERY,...GALLERY];
gt.innerHTML = imgs.map(s=>`<div class="gallery-card"><img src="${s}" alt="Dive Down"></div>`).join('');

// Zone cards
const zc = document.getElementById('zones-container');
Object.entries(grouped).forEach(([zone,list])=>{
  const id = slug(zone);
  zc.innerHTML += `<div class="zone-card" id="${id}"><div class="zone-header"><h3>${zone}</h3><p>${list.length} fish listed</p></div><div class="table-wrap"><table class="zone-table"><thead><tr><th>Fish Name</th><th>Rarity</th><th class="notes-col">Notes</th></tr></thead><tbody>${list.map(e=>`<tr id="${fid(e)}"><td><div class="fish-cell"><img src="${e.icon}" alt="${e.fish}" onerror="this.style.display='none'"><span>${e.fish}</span></div></td><td>${badge(e.rarity)}</td><td class="notes-col">${e.note}</td></tr>`).join('')}</tbody></table></div></div>`;
});

// FAQ
const fl = document.getElementById('faqList');
fl.innerHTML = FAQ.map(([q,a])=>`<div class="faq-item"><button class="faq-q">${q}<span class="chev">&#x25BC;</span></button><div class="faq-a"><div class="faq-a-inner">${a}</div></div></div>`).join('');
fl.querySelectorAll('.faq-q').forEach(btn=>{
  btn.onclick=()=>{const it=btn.parentElement;fl.querySelectorAll('.faq-item').forEach(i=>{if(i!==it)i.classList.remove('active')});it.classList.toggle('active');};
});

/* ═══════ RENDER REBIRTH ═══════ */
const rc = document.getElementById('rebirthContainer');
rc.innerHTML = R.map(rb=>`<article class="rebirth-card"><div class="rb-badge">${rb.badge}</div><div class="rb-tier">${rb.tier}</div><div class="rb-money">${rb.money}</div><div><span class="rb-label">Required Fish</span><div class="rb-fish">${rb.fish.map(f=>{const d=lookup[f.toLowerCase()];return d?`<span class="fish-link" data-fish="${f.toLowerCase()}">${f}</span>`:f;}).join(', ')}</div></div><div><span class="rb-label">Rewards</span><ul class="rb-rewards">${rb.rewards.map(r=>`<li>${r}</li>`).join('')}</ul></div></article>`).join('');

/* ═══════ FISH TOOLTIPS ═══════ */
let openTip = null;
function closeTip(){if(openTip){openTip.remove();openTip=null;}}

document.querySelectorAll('.fish-link').forEach(el=>{
  const fish = lookup[el.dataset.fish];
  if(!fish) return;
  function show(){
    closeTip();
    const r=el.getBoundingClientRect();
    const below=window.innerHeight-r.bottom>280;
    const tip=document.createElement('div');
    tip.className=`fish-tooltip show ${below?'below':'above'}`;
    tip.innerHTML=`<div class="arrow"></div><div class="tt-card"><div class="tt-img"><img src="${fish.icon}" alt="${fish.fish}" onerror="this.style.display='none'"></div><div class="tt-name">${fish.fish}</div><div class="tt-info"><div><span class="tt-lbl">Rarity</span>${badge(fish.rarity)}</div><div><span class="tt-lbl">Location</span><span class="tt-val">${fish.zone}</span></div></div></div>`;
    el.style.position='relative';el.appendChild(tip);
    const t=tip.getBoundingClientRect();
    if(t.left<8)tip.style.transform=`translateX(${8-t.left}px)`;
    else if(t.right>window.innerWidth-8)tip.style.transform=`translateX(${window.innerWidth-8-t.right}px)`;
    openTip=tip;
  }
  if(window.innerWidth>768){el.onmouseenter=show;el.onmouseleave=closeTip;}
  el.onclick=e=>{e.stopPropagation();openTip&&openTip.parentElement===el?closeTip():show();};
});
document.addEventListener('click',closeTip);

/* ═══════ SEARCH ═══════ */
function doSearch(input,results){
  const q=input.value.trim().toLowerCase();
  if(!q){results.classList.remove('open');return;}
  const m=F.filter(e=>e.fish.toLowerCase().includes(q)).sort((a,b)=>{const d=(a.fish.toLowerCase().startsWith(q)?0:1)-(b.fish.toLowerCase().startsWith(q)?0:1);return d||a.fish.localeCompare(b.fish);}).slice(0,12);
  results.classList.add('open');
  if(!m.length){results.innerHTML='<p class="search-empty">No fish matched that search.</p>';return;}
  results.innerHTML=m.map(e=>`<button class="search-row" data-f="${fid(e)}" data-z="${slug(e.zone)}"><img src="${e.icon}" alt="${e.fish}" onerror="this.style.display='none'"><span class="name">${e.fish}</span>${badge(e.rarity)}<span class="zone">${e.zone}</span></button>`).join('');
  results.querySelectorAll('.search-row').forEach(btn=>{btn.onclick=()=>{
    showHome();
    setTimeout(()=>{
      document.querySelectorAll('.zone-card.is-highlighted').forEach(c=>c.classList.remove('is-highlighted'));
      document.querySelectorAll('.fish-row-highlight').forEach(r=>r.classList.remove('fish-row-highlight'));
      const row=document.getElementById(btn.dataset.f),card=document.getElementById(btn.dataset.z);
      if(row&&card){card.classList.add('is-highlighted');row.classList.add('fish-row-highlight');row.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>{card.classList.remove('is-highlighted');row.classList.remove('fish-row-highlight');},3000);}
    },100);
    input.value='';results.classList.remove('open');document.getElementById('searchDrop').classList.remove('open');
  };});
}

document.getElementById('heroSearch').oninput = function(){doSearch(this,document.getElementById('heroResults'));};
document.getElementById('headerSearch').oninput = function(){doSearch(this,document.getElementById('headerResults'));};

/* ═══════ MOBILE MENU ═══════ */
const sidebar=document.getElementById('sidebar'),backdrop=document.getElementById('backdrop');
function closeMobile(){sidebar.classList.remove('open');backdrop.classList.remove('open');document.body.classList.remove('menu-open');}
function openMobile(){sidebar.classList.add('open');backdrop.classList.add('open');document.body.classList.add('menu-open');}
document.getElementById('menuToggle').onclick=()=>sidebar.classList.contains('open')?closeMobile():openMobile();
backdrop.onclick=closeMobile;

/* ═══════ SEARCH TOGGLE ═══════ */
document.getElementById('searchToggle').onclick=()=>{const d=document.getElementById('searchDrop');d.classList.toggle('open');if(d.classList.contains('open'))document.getElementById('headerSearch').focus();};

/* ═══════ SCROLL TOP ═══════ */
const sb=document.getElementById('scrollTop');
window.onscroll=()=>sb.classList.toggle('show',window.scrollY>400);
sb.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});

/* ═══════ NAV LINKS ═══════ */
document.getElementById('logoLink').onclick=e=>{e.preventDefault();showHome();};
document.getElementById('qcardRebirth').onclick=e=>{e.preventDefault();showRebirth();};
document.getElementById('rebirthBack').onclick=e=>{e.preventDefault();showHome();};
document.getElementById('rebirthFooterBack').onclick=e=>{e.preventDefault();showHome();};

// Smooth scroll for # links on home page
pageHome.querySelectorAll('a[href^="#"]').forEach(a=>{
  if(a.id==='qcardRebirth'||a.id==='rebirthBack'||a.id==='rebirthFooterBack') return;
  a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'});});
});

/* ═══════ INIT ═══════ */
buildSidebarHome();


  


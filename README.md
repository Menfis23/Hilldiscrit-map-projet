# Hill District Vision

A church-led, step-by-step vision for Pittsburgh's Hill District, around Kirkpatrick St. It started as an interactive map of where new community buildings could go, and now has the whole plan: real lots, a self-funding shelter, a roadmap with checkpoints, costs, and ways to help.

**By Rechab**

## Pages

| Page | What it shows |
|---|---|
| `index.html` | Home: the vision in one sentence and links to every section |
| `map.html` | The Lot Map: the proposed sites, plus every vacant or publicly owned lot from county records. Click a lot to see its size and owner type, and mark it Possible, Chosen, or Not available |
| `cycle.html` | The shelter and recycling cycle, as a circle you can click through |
| `roadmap.html` | Stage 0 to Stage 5, with tasks and checkpoints to tick off |
| `costs.html` | Rough cost ranges for every project |
| `involved.html` | Volunteer, give, partner, and a printable neighbor survey |

## Where the content lives

- `data/plan.js`: the roadmap stages, costs, cycle steps, and building list. Change a number or a sentence here and every page updates.
- `data/lots.js`: the open lots, built once from Allegheny County parcel shapes and WPRDC property assessments. Owners are shown by type only (City, URA, Housing Authority, private person, private company), never by name.
- `nav.js`: the top menu and footer for every page.
- `style.css`: colors and layout shared by every page.

## Saving marks and progress

Lot marks and roadmap ticks are saved in the browser you use. To share them with someone else, use **Copy our marks** (Lot Map) or **Copy progress** (Roadmap) and send them the code. They paste it with **Paste marks** or **Paste progress**.

## Still to fill in

- The church contact, giving link, and partner contact on the Get Involved page
- A Google Form link for the online neighbor survey

---

## About the original map

## The idea

The Hill District has a lot of empty land but is missing things people need every day. Since Salem's Market closed in February 2025, it has had no grocery store. There's only one city rec center. And many residents don't have a car.

This map shows what's already in the neighborhood, then marks where new buildings would help the most.

## How I picked each spot

For every site I asked four questions:

1. **What's already nearby?** Don't build something the neighborhood already has.
2. **Who needs it most?**
3. **Can people walk or take the bus there?**
4. **Is the land actually empty?**

## Proposed sites

| Site | Where | Why |
|---|---|---|
| 🛒 Community Grocery Store | 1850 Centre Ave | Reopen the empty store that's already there instead of building new |
| 🏀 Kirkpatrick Recreation Center | Kirkpatrick St, south of Centre | Ammon already covers Bedford Ave. The city's Master Plan calls Kirkpatrick a "Recreational Corridor" |
| 💪 Gym & Fitness Center | Centre Ave, Upper Hill | The Upper Hill has no fitness space |
| 🎒 Early Learning Center (Pre-K) | Crawford-Roberts | The Hill has K–12 schools but needs childcare before kindergarten |
| 🩺 Community Health Clinic | Centre Ave, Kirkpatrick to Junilla | The big hospitals are in Oakland, too far for people without cars |
| 🛠️ Job Training Center | Centre Ave, Middle Hill | On the bus line to jobs Downtown and in Oakland |
| 🌱 Community Garden | Near Kirkpatrick & Bedford | Fresh food on vacant city lots through the Adopt-a-Lot program |
| 🌳 Centre Avenue Park & Plaza | Centre Ave, east of Kirkpatrick | This stretch has no green space for people to gather |

## How to use the map

- **Click a pin or a name in the sidebar** to see why that site was chosen, who it helps, and how people get there.
- **White squares** are places that already exist (Ammon Rec Center, the library, schools, Hill House, Kennard Park).
- **"Show 5-minute walk zones"** draws a circle around each site showing how far people can walk in about 5 minutes (400 meters).
- **"Move pins"** lets you drag pins to a new spot and get the new coordinates.

## Files

| File | What it does |
|---|---|
| `map.html` | The map page, the site data, and the map code |
| `style.css` | How every page looks: colors and layout |
| `README.md` | This explanation |

## How to add or change a site

Open `map.html` and find the `proposed` list near the top of the script. Each site is one block like this:

```js
{
  id: "park", name: "Centre Avenue Park & Plaza", icon: "🌳", color: "#0c8599",
  lat: 40.44655, lng: -79.97050,
  where: "Centre Ave, east of Kirkpatrick",
  why: "...",
  who: "...",
  access: "..."
}
```

- `lat` (latitude) moves the pin **north or south**. A bigger number means farther north.
- `lng` (longitude) moves the pin **east or west**. Here it's negative, so a number closer to zero means farther east.

To add a site, copy a block, change the words and the numbers, and save.

## Built with

- [Leaflet](https://leafletjs.com/), a free JavaScript map library
- Esri World Imagery for the satellite photos
- OpenStreetMap for the address coordinates

## Sources

- [City of Pittsburgh: Ammon Recreation Center](https://www.pittsburghpa.gov/Recreation-Events/Park-Facilities/Recreation-Centers/Ammon-Recreation-Center)
- [URA: Centre Avenue Corridor](https://ura.org/pages/centre-avenue-corridor)
- [Greater Hill District Master Plan (2011)](https://pittsburghpa.gov/files/assets/city/v/1/dcp/documents/10497_greater_hill_district_master_plan_2011.pdf)
- [City of Pittsburgh: Adopt-a-Lot Program](https://www.pittsburghpa.gov/Business-Development/City-Planning/Planning-Programs/Adopt-A-Lot/Vacant-Lot-Toolkit)
- [CBS Pittsburgh: Salem's Market sale to Macedonia Church](https://www.cbsnews.com/pittsburgh/news/salems-market-sale-macedonia-church-of-pittsburgh)
- [TribLive: Salem's Market to sell Hill District store](https://emergency.triblive.com/?p=3864977)

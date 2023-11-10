// Show game categories
const categories = [
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
  "open-world",
  "survival",
  "pvp",
  "pve",
  "pixel",
  "voxel",
  "zombie",
  "turn-based",
  "first-person",
  "third-Person",
  "top-down",
  "tank",
  "space",
  "sailing",
  "side-scroller",
  "superhero",
  "permadeath",
  "card",
  "battle-royale",
  "mmo",
  "mmofps",
  "mmotps",
  "3d",
  "2d",
  "anime",
  "fantasy",
  "sci-fi",
  "fighting",
  "action-rpg",
  "action",
  "military",
  "martial-arts",
  "flight",
  "low-spec",
  "tower-defense",
  "horror",
  "mmorts",
];

function onSelectCategory(categ){
  console.log(categ)
}

function SideBar() {
  return (
    <aside className="w-1/4 p-4 bg-gray-200 sidebar">
    <h2 className="text-xl font-bold mb-4">Categories</h2>
    <ul>
      {categories.map((category, index) => (
        <li
          key={index}
          className="cursor-pointer hover:underline mb-2"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  </aside>

  );
}

export default SideBar;

import React, { useState, useRef, useEffect } from "react";

// Initial data for the nested checkboxes.
// The data structure includes categories with children, each having images.
const initialData = [
  {
    id: "1",
    name: "Fruits",
    icon: "🍎", // Using an emoji as a simple icon
    children: [
      { id: "1-1", name: "Apple", imageUrl: "https://placehold.co/40x40/FF5733/FFF?text=A",
        images: ["https://assets.clevelandclinic.org/transform/LargeFeatureImage/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg", 
                "https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-26-Amazing-Benefits-Of-Green-Apples-For-Skin-Hair-And-Health-1.jpg.webp", 
                "https://hips.hearstapps.com/hmg-prod/images/retail-display-of-apples-at-a-supermarket-royalty-free-image-1727202636.jpg?crop=1xw:0.89591xh;0,0"]
             },
      { id: "1-2", name: "Banana", imageUrl: "https://placehold.co/40x40/FFC300/000?text=B",
         images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/440px-Bananas_white_background_DS.jpg", 
                "https://i1.wp.com/infographiclist.files.wordpress.com/2014/03/health-benefits-of-bananas_525b9547e6af3.jpg",
                "https://www.agrifarming.in/wp-content/uploads/2022/04/Banana-Varieties-India6.jpg"] 
            },
      { id: "1-3", name: "Orange", imageUrl: "https://placehold.co/40x40/FF7A33/FFF?text=O",
         images: ["https://skdesu.com/wp-content/uploads/2023/07/orange.jpg",
                "https://tse2.mm.bing.net/th/id/OIP.wGs8eA5388oViX0T3NKcaQHaDz?pid=Api&P=0&h=180", 
                "https://tse3.mm.bing.net/th/id/OIP.eX4YYWmDy23tP7dIZFCMWAHaFj?pid=Api&P=0&h=180"]
             },
      { id: "1-4", name: "Mango", imageUrl: "https://placehold.co/40x40/A8A800/FFF?text=M",
         images: ["https://tse1.mm.bing.net/th/id/OIP.b7z1RX4O1kEvdUuSjfJRqQHaE7?pid=Api&P=0&h=180", 
                 "https://tse3.mm.bing.net/th/id/OIP.SjLDLfWpTKmK1Q_C49JvRwHaEK?pid=Api&P=0&h=180", 
                 "https://tse4.mm.bing.net/th/id/OIP.DMjS1GJLKSK4MUvNdREMlwHaEK?pid=Api&P=0&h=180"] },
      { id: "1-5", name: "Grapes", imageUrl: "https://placehold.co/40x40/6A0DAD/FFF?text=G", 
        images: ["https://tse4.mm.bing.net/th/id/OIP.1df-QMOzTXHrObahXKs7JQHaE8?pid=Api&P=0&h=180", 
            "https://tse2.mm.bing.net/th/id/OIP.bndUof3euFdoKa6crk7GIAHaEK?pid=Api&P=0&h=180", 
            "https://tse3.mm.bing.net/th/id/OIP.HXW6NWFO2YEDI562VkLnfgHaEK?pid=Api&P=0&h=180"] 
        },
      { id: "1-6", name: "Pineapple", imageUrl: "https://placehold.co/40x40/E6E600/000?text=P",
         images: ["https://tse1.mm.bing.net/th/id/OIP.FPa8PRbUo-1KaJ1ift6uFgHaE9?pid=Api&P=0&h=180", 
            "https://tse2.mm.bing.net/th/id/OIP.gBEMebdCwLMldhlY5Kd1zAHaFj?pid=Api&P=0&h=180", 
            "https://tse3.mm.bing.net/th/id/OIP.W3JGmFIExXiwJ_5NnA77vQAAAA?pid=Api&P=0&h=180"] 
        },
      { id: "1-7", name: "Strawberry", imageUrl: "https://placehold.co/40x40/C70039/FFF?text=S",
         images: ["https://tse4.mm.bing.net/th/id/OIP.ElEwr7lqLVi3GqyQ28A86wHaE8?pid=Api&P=0&h=180", 
            "https://tse1.mm.bing.net/th/id/OIP.A7hPjh6T923nynyaJa3_rwHaGu?pid=Api&P=0&h=180",
             "https://tse3.mm.bing.net/th/id/OIP.agU6drfeU1nK6uoxP5-LQQHaEm?pid=Api&P=0&h=180"] 
            },
      { id: "1-8", name: "Watermelon", imageUrl: "https://placehold.co/40x40/FF0000/FFF?text=W", 
        images: ["https://tse2.mm.bing.net/th/id/OIP.DMrhp1cRH43wJolOBpUUrgHaFj?pid=Api&P=0&h=180", 
            "https://tse1.mm.bing.net/th/id/OIP._Ps8zqFyjfPZzZErlzuWqgHaEo?pid=Api&P=0&h=180", 
            "https://tse2.mm.bing.net/th/id/OIP.DMrhp1cRH43wJolOBpUUrgHaFj?pid=Api&P=0&h=180"] 
        },
      { id: "1-9", name: "Peach", imageUrl: "https://placehold.co/40x40/FFC999/000?text=P",
         images: ["https://tse1.mm.bing.net/th/id/OIP.URXepRvIaf2lkF_5o5i7BQHaE8?pid=Api&P=0&h=180", 
            "https://tse2.mm.bing.net/th/id/OIP.V20q0D9P4aqawPEip8eEKAHaFj?pid=Api&P=0&h=180", 
            "https://tse2.mm.bing.net/th/id/OIP.gnAF8ZmruukefXRfMF6KPwHaEK?pid=Api&P=0&h=180"] },
      { id: "1-10", name: "Cherry", imageUrl: "https://placehold.co/40x40/900C3F/FFF?text=C",
         images: ["https://tse1.mm.bing.net/th/id/OIP.69Fb0eJHDQyHie2pPEMVWwHaE6?pid=Api&P=0&h=180",
             "https://tse2.mm.bing.net/th/id/OIP.cnFHVcMSZ6OB_tuORTxwNgHaEK?pid=Api&P=0&h=180", 
             "https://tse4.mm.bing.net/th/id/OIP.PAMOlODjysul8CL9Ekbf7wHaHa?pid=Api&P=0&h=180"] },
    ],
  },
  {
    id: "2",
    name: "Vegetables",
    icon: "🥕",
    children: [
      { id: "2-1", name: "Carrot", imageUrl: "https://placehold.co/40x40/FF5733/FFF?text=C", images: ["https://kheduthaat.com/wp-content/uploads/2022/08/VF-Photos-16-1.jpg", "https://m.media-amazon.com/images/I/71S6oQqVa5L._UF1000,1000_QL80_.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfnlwBFvhuWDZ1w4xy--H8IMgyPnIfe7y-w&s"] },
      { id: "2-2", name: "Broccoli", imageUrl: "https://placehold.co/40x40/2E8B57/FFF?text=B", images: ["https://www.bbassets.com/media/uploads/p/l/10000063_22-fresho-broccoli.jpg", "https://images.squarespace-cdn.com/content/v1/5e5856a58220896e4dd6b366/1595206705802-CSDBAUUCN9R8UKRTQ5DC/broccoli-packing.jpg", "https://placehold.co/300x200/21623D/FFF?https://tse3.mm.bing.net/th/id/OIP.3_4CWKtTL81p2KuQLTfscwHaE8?pid=Api&P=0&h=180=Broccoli+3"] },
      { id: "2-3", name: "Potato", imageUrl: "https://placehold.co/40x40/A0522D/FFF?text=P", images: ["https://producebusiness.com/wp-content/uploads/2024/10/dec-potatoesandonions-feature.jpg", "https://producebusiness.com/wp-content/uploads/2023/10/september-merchandisingreviewpotatosales-1.jpg", "https://c8.alamy.com/comp/2DYFACW/potatoes-for-sale-in-a-supermarket-and-on-display-2DYFACW.jpg"] },
      { id: "2-4", name: "Tomato", imageUrl: "https://placehold.co/40x40/DC143C/FFF?text=T", images: ["https://producebusiness.com/wp-content/uploads/2021/03/february-tomatoesfeature-1.jpg", "https://www.cbi.eu/sites/default/files/styles/image_medium/public/2023-10/2023-CBI-FFV-Tomatoes-Market-Potential---Figure-9.jpg", "https://www.cbi.eu/sites/default/files/styles/image_medium/public/2023-10/2023-CBI-FFV-Tomatoes-Market-Potential---Figure-9.jpg"] },
      { id: "2-5", name: "Cucumber", imageUrl: "https://placehold.co/40x40/3CB371/FFF?text=C", images: ["https://i.ebayimg.com/images/g/8NAAAOSw-dRj5WNP/s-l400.jpg", "https://i.etsystatic.com/51534337/r/il/5fea33/6113877327/il_570xN.6113877327_8kd3.jpg", "https://ttseeds.com/wp-content/uploads/2024/11/707-1-1.jpg"] },
      { id: "2-6", name: "Lettuce", imageUrl: "https://placehold.co/40x40/7CFC00/000?text=L", images: ["https://producebusiness.com/wp-content/uploads/2024/10/december-merchndisingreviewleafygreens-featured.jpg", "https://cdn.globalso.com/shuangxingseeds/H0c75c11ca9c44e48ad7479ad39f43229A.jpg", "https://c8.alamy.com/comp/JW0R8D/fresh-lettuces-on-display-at-saturday-market-in-dieppe-normandy-france-JW0R8D.jpg"] },
      { id: "2-7", name: "Onion", imageUrl: "https://placehold.co/40x40/BDB76B/FFF?text=O", images: ["https://producebusiness.com/wp-content/uploads/2024/10/december-featurepotatoonion-featured.jpg", "https://www.onions-usa.org/wp-content/uploads/2019/10/Image_2673fc72.jpg", "https://onionworld.net/wp-content/uploads/2021/10/Onion-display-732x437.jpg"] },
    ]
  },
  {
    id: "3",
    name: "Ice_cream",
    icon: "🍦",
    children: [
      { id: "3-1", name: "vanilla", imageUrl: "https://placehold.co/40x40/F3E9DD/000?text=V", images: ["https://5.imimg.com/data5/WZ/OV/SF/SELLER-11321963/ice-cream-cornettos-500x500.jpg", "https://assets.bonappetit.com/photos/630792cdb8638bf70723a77c/master/w_1600%2Cc_limit/20220809-whole-foods-ice-cream.jpg"] },
      { id: "3-2", name: "strawberry", imageUrl: "https://placehold.co/40x40/FFB6C1/FFF?text=S", images: ["https://i5.walmartimages.com/asr/bea1cb11-feea-498c-885e-1dd27ed868f7.0a1772dcea75bbadf949ccfe739b0cf6.jpeg", "https://www.foodrepublic.com/img/gallery/13-store-bought-strawberry-ice-cream-brands-ranked/13-great-value-strawberry-ice-cream-1748636745.jpg", "https://bf1af2.akinoncloudcdn.com/products/2024/09/27/166418/5d4c843d-4563-4cc8-81b1-c1905e08552e_size3840_cropCenter.jpg"] },
      { id: "3-3", name: "mint", imageUrl: "https://placehold.co/40x40/98FF98/000?text=M", images: ["https://images-cdn.ubuy.co.in/64ca9f04e96dc74749250b90-great-value-mint-chip-ice-cream-48-fl.jpg", "https://www.purelykaylie.com/wp-content/uploads/2023/07/vegan-mint-chocolate-chip-ice-cream-14-320x180.jpg", "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/6683735e59289ed79a331010_2024-07-08_19-47-37_front.main.jpg"] },
    
    ],
  },
  {
    id: "4",
    name: "chocolate",
    icon: "🍫",
    children: [
      { id: "4-1", name: "dark chocolate", imageUrl: "https://placehold.co/40x40/362B2A/FFF?text=DC", images: ["https://m.media-amazon.com/images/I/81kd+W2zD7L.jpg", "https://m.media-amazon.com/images/I/31zqxL%2B2%2B8L._AC_SY350_QL15_.jpg", "https://np-live-21.slatic.net/kf/S140c1c97ca1b4cc88e43c815e9d9bb57h.jpg"] },
      { id: "4-2", name: "milk chocolate", imageUrl: "https://placehold.co/40x40/6E3D19/FFF?text=MC", images: ["https://images.jdmagicbox.com/quickquotes/images_main/-5pi9gg48.jpg", "https://c8.alamy.com/comp/HW52ED/easter-eggs-cadbury-dairy-milk-display-packaging-colourful-HW52ED.jpg", "https://c8.alamy.com/comp/M5TJMJ/cadbury-dairy-milk-easter-eggs-for-sale-in-a-store-window-M5TJMJ.jpg"] },
     
    ],
  },
  {
    id: "5",
    name: "Milk",
    icon: "🥛",
    children: [
      { id: "5-1", name: "whole milk", imageUrl: "https://placehold.co/40x40/F5F5DC/000?text=WM", images: ["https://e93f49a600d6c4b90224.cdn6.editmysite.com/uploads/b/e93f49a600d6c4b902247e7b1a79dc4b2bb819916c48ee83f1aa55416ccb823f/PLF%20Milk_1709755039.jpg", "https://mednow.ca/cdn/shop/products/999999-62600143280.jpg", "https://www.instacart.com/image-server/1864x1864/www.instacart.com/assets/domains/product-image/file/large_9cb81af0-c793-426f-81d1-6f24ea9de584.jpg"] },
      { id: "5-2", name: "skim milk", imageUrl: "https://placehold.co/40x40/E0FFFF/000?text=SM", images: ["https://thumbs.dreamstime.com/b/plastic-milk-bottles-whole-semi-skimmed-sale-supermarket-chiller-peterlee-great-britain-184712589.jpg", "https://scottishgrocer.co.uk/wp-content/uploads/2014/01/74a_0214.jpg", "https://www.superwafer.ca/storage/products/February2022/WwUhPT8mCnwRMkMgVUq2.jpg"] },
      { id: "5-3", name: "almond milk", imageUrl: "https://placehold.co/40x40/D2B48C/000?text=AM", images: ["https://www.livekindly.com/wp-content/uploads/2018/02/So-Delicious-Almond-Milk-Beverages-and-Blends-Feature.jpg", "https://www.livekindly.com/wp-content/uploads/2019/04/vegan-plant-based-news-almond-milk-guide-1024x576.jpg", "https://eu-images.contentstack.com/v3/assets/blt09e5e63517a16184/bltc9585231d0d5acb9/64d6ce81f5d34075f78fd372/elmhurst.jpg"] },
     { id: "5-4", name: "hemp milk", imageUrl: "https://placehold.co/40x40/E8F5E9/000?text=HM", images: ["https://images.offerup.com/cYxYyEdTW07C7n8zlOzpmkcg-io=/250x250/102f/102fb104b9894116a5cd1a38a0de3c9b.jpg", "https://i.pinimg.com/736x/79/5c/17/795c17bff1df78141a4617796847d85e.jpg", "https://m.media-amazon.com/images/I/51nODTq8TSL._UF1000,1000_QL80_.jpg"] },
    ],
  },
];

// Helper function to get the initial state for the checkboxes.
const getInitialCheckedState = (data) => {
  const checkedState = {};
  data.forEach(category => {
    checkedState[category.id] = { checked: false, indeterminate: false, children: {} };
    category.children.forEach(item => { checkedState[category.id].children[item.id] = false; });
  });
  return checkedState;
};

const updateParentsState = (data, checkedState) => {
  const newCheckedState = { ...checkedState };
  data.forEach(category => {
    const childIds = category.children.map(child => child.id);
    const checkedChildren = childIds.filter(id => newCheckedState[category.id].children[id]);
    newCheckedState[category.id].checked = checkedChildren.length === childIds.length;
    newCheckedState[category.id].indeterminate = checkedChildren.length > 0 && checkedChildren.length < childIds.length;
  });
  return newCheckedState;
};

const getSelectAllState = (checkedState, data) => {
  const allChecked = data.every(cat => checkedState[cat.id].checked);
  const someChecked = data.some(cat => checkedState[cat.id].checked || checkedState[cat.id].indeterminate);
  if (allChecked) return "checked";
  if (someChecked) return "indeterminate";
  return "unchecked";
};

// Components
const NestedCheckboxItem = ({ item, checked, onCheckboxChange }) => (
  <div className="flex items-center gap-2 text-gray-600">
    <label className="flex items-center gap-2 cursor-pointer grow">
      <input type="checkbox" className="w-4 h-4 accent-indigo-500 rounded" checked={checked} onChange={() => onCheckboxChange(item, !checked)} />
      <span className="flex items-center gap-2">
        <img src={item.imageUrl} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
        {item.name}
      </span>
    </label>
  </div>
);

const NestedCheckboxCategory = ({ category, checkedState, onCategoryChange, onChildChange }) => {
  const checkboxRef = useRef(null);
  useEffect(() => { if (checkboxRef.current) checkboxRef.current.indeterminate = checkedState.indeterminate; }, [checkedState.indeterminate]);

  return (
    <div className="mb-3">
      <label className="flex items-center gap-2 cursor-pointer font-medium text-gray-800">
        <input type="checkbox" className="w-5 h-5 accent-indigo-600 rounded" ref={checkboxRef} checked={checkedState.checked} onChange={() => onCategoryChange(category, !checkedState.checked)} />
        <span className="text-xl">{category.icon}</span>
        {category.name}
      </label>
      <div className="ml-6 mt-2 space-y-1">
        {category.children.map(item => (
          <NestedCheckboxItem key={item.id} item={item} checked={checkedState.children[item.id]} onCheckboxChange={(child, checked) => onChildChange(category.id, child, checked)} />
        ))}
      </div>
    </div>
  );
};

const ImageMagnifier = ({ src, x, y }) => {
  const zoom = 2.5;
  return (
    <div className="absolute overflow-hidden rounded-full shadow-lg" style={{
      width: "150px", height: "150px",
      left: `${x - 75}px`, top: `${y - 75}px`,
      border: "3px solid #fff", pointerEvents: "none",
      backgroundImage: `url(${src})`, backgroundRepeat: "no-repeat",
      backgroundSize: "750px 500px",
      backgroundPosition: `${-x*zoom + 75}px ${-y*zoom + 75}px`,
    }} />
  );
};

// Main App
export default function App() {
   const [checkedState, setCheckedState] = useState(getInitialCheckedState(initialData));
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const selectAllRef = useRef(null);
  const [magnifiedImage, setMagnifiedImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedPayment, setSelectedPayment] = useState("one-time");
  const selectAllState = getSelectAllState(checkedState, initialData);
  useEffect(() => {
    if (selectAllRef.current) selectAllRef.current.indeterminate = selectAllState === "indeterminate";
  }, [selectAllState]);

const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    const newState = getInitialCheckedState(initialData);
    let items = [];
    let quantities = {};
    if (checked) {
      initialData.forEach((cat) => {
        newState[cat.id].checked = true;
        Object.keys(newState[cat.id].children).forEach((cid) => (newState[cat.id].children[cid] = true));
        items = items.concat(cat.children);
        cat.children.forEach((child) => { quantities[child.id] = 1; });
      });
    }
    setCheckedState(newState);
    setSelectedItems(items);
    setItemQuantities(quantities);
  };

  const handleCategoryChange = (cat, checked) => {
    const newState = { ...checkedState };
    newState[cat.id].checked = checked;
    newState[cat.id].indeterminate = false;
    Object.keys(newState[cat.id].children).forEach((cid) => (newState[cat.id].children[cid] = checked));

    setCheckedState(updateParentsState(initialData, newState));
    setSelectedItems((prev) => {
      const filtered = prev.filter((item) => item.id.split("-")[0] !== cat.id);
      const newItems = checked ? [...filtered, ...cat.children] : filtered;
      const newQuantities = { ...itemQuantities };
      cat.children.forEach((child) => {
        if (checked) newQuantities[child.id] = newQuantities[child.id] || 1;
        else delete newQuantities[child.id];
      });
      setItemQuantities(newQuantities);
      return newItems;
    });
  };

  const handleChildChange = (catId, item, checked) => {
    const newState = { ...checkedState };
    newState[catId].children[item.id] = checked;
    setCheckedState(updateParentsState(initialData, newState));

    setSelectedItems((prev) => {
      const exists = prev.some((it) => it.id === item.id);
      const newQuantities = { ...itemQuantities };
      if (checked && !exists) {
        newQuantities[item.id] = 1;
        setItemQuantities(newQuantities);
        return [...prev, item];
      }
      if (!checked && exists) {
        delete newQuantities[item.id];
        setItemQuantities(newQuantities);
        return prev.filter((it) => it.id !== item.id);
      }
      return prev;
    });
  };

  const handleMouseEnter = (e, src) => setMagnifiedImage(src);
  const handleMouseLeave = () => setMagnifiedImage(null);
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handlePaymentChange = (option) => setSelectedPayment(option);
  const handleQuantityChange = (itemId, delta) => {
    setItemQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, (prev[itemId] || 1) + delta),
    }));
  };

  return (
    <div className="p-4 lg:p-8 bg-gray-100 min-h-screen font-sans flex flex-col lg:flex-row gap-8">
      {/* Left Panel: Selection */}
      <div className="w-full lg:w-1/4 p-4 bg-white rounded-xl shadow-md mb-4 lg:mb-0">
        <label className="flex items-center gap-2 font-semibold mb-4">
          <input type="checkbox" className="w-5 h-5 accent-indigo-500 rounded" ref={selectAllRef} checked={selectAllState === "checked"} onChange={handleSelectAllChange} />
          Select All
        </label>
        {initialData.map((cat) => (
          <NestedCheckboxCategory key={cat.id} category={cat} checkedState={checkedState[cat.id]} onCategoryChange={handleCategoryChange} onChildChange={handleChildChange} />
        ))}
      </div>

      {/* Middle Panel: Image Gallery */}
       <div className="w-full lg:w-2/3 p-4 bg-white rounded-xl shadow-md flex flex-col gap-6 overflow-x-auto">
    {selectedItems.length === 0 ? (
      <p className="text-gray-400 text-center py-20">No items selected</p>
    ) : (
      selectedItems.map((item) => (
        <div key={item.id} className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <div className="flex gap-4 overflow-x-auto">
            {item.images.map((imgSrc, index) => (
              <div key={`${item.id}-${index}`} className="flex-shrink-0 w-64 h-64 relative cursor-zoom-in rounded-lg">
                <img
                  src={imgSrc}
                  alt={`${item.name} ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  onMouseEnter={(e) => handleMouseEnter(e, imgSrc)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                />
              </div>
            ))}
          </div>
        </div>
      ))
    )}
    {magnifiedImage && <ImageMagnifier src={magnifiedImage} x={mousePos.x} y={mousePos.y} />}
  </div>

      {/* Right Panel: Quantity & Payment */}
      {selectedItems.length > 0 && (
         <div className="w-full lg:w-1/4 p-4 bg-white rounded-xl shadow-md flex flex-col gap-4 mt-4 lg:mt-0">
          <h3 className="font-semibold text-lg">Quantity</h3>
          {selectedItems.map((item) => (
            <div key={item.id} className="flex items-center gap-2 mb-2">
              <span className="w-24">{item.name}</span>
              <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span>{itemQuantities[item.id] || 1}</span>
              <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
          ))}

          <h3 className="font-semibold text-lg mt-4">Payment</h3>
          <div className="flex flex-col gap-2">
            <label>
              <input type="radio" value="one-time" checked={selectedPayment === "one-time"} onChange={() => handlePaymentChange("one-time")} />
              One-time
            </label>
            <label>
              <input type="radio" value="subscription" checked={selectedPayment === "subscription"} onChange={() => handlePaymentChange("subscription")} />
              Subscription
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
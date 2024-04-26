import ricebag from "../assets/ricebag.png";

export default function CartItem() {
  return (
    <div className="flex flex-row gap-4 w-full items-center justify-evenly mt-6">
      <div className="p-6 border-[1px] rounded-sm border-gray-300 flex items-center flex-col gap-4">
        <span>HMT Rice</span>
        <img
          src={ricebag}
          alt=""
          style={{
            width: "300px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="flex max-w-[500px] flex-col">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row">
            <button className="border-2 border-gray-300 rounded-full p-2">
              Description
            </button>
            <button className="border-2 border-gray-300 rounded-full p-2">
              Reviews
            </button>
          </div>

          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            mollitia? Voluptatibus, nihil, maxime eum fugiat inventore dolore id
            quis in temporibus facilis nisi quisquam consequatur? Dolor velit
            minus dolorem expedita deserunt est suscipit beatae ut!
          </span>
          <div className="flex flex-col gap-1">
            <span>
              <span className="font-bold">Type:</span> organic
            </span>
            <span>
              <span className="font-bold">MFG:</span> Jan 5, 2025
            </span>
            <span>
              <span className="font-bold">BCODE:</span> CBM598
            </span>
            <span>
              <span className="font-bold">Category:</span>
              Brown Rice
            </span>
          </div>
          <div className="flex flex-col">
            <span>HMT Rice</span>
            <span>$60</span>
          </div>
          <div>
            <div className="flex gap-4 items-center justify-start ">
              <input
                type="number"
                name="1"
                value={1}
                id="q"
                placeholder="Quantity"
                className="w-16 h-10 rounded-md outline-black"
              />
              <button className="bg-blue-500 p-3 rounded-full text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

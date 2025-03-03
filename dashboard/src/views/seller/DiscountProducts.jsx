import React, { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import Search from "../components/Search";

const DiscountProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  return (
    <div className="px-2 pt-5 lg:px-7 ">
      <div className="w-full p-4  bg-[#283046] rounded-md">
        <Search
          setParPage={setParPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <div className="relative mt-5 overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No
                </th>
                <th scope="col" className="px-4 py-3">
                  Image
                </th>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Category
                </th>
                <th scope="col" className="px-4 py-3">
                  Brand
                </th>
                <th scope="col" className="px-4 py-3">
                  Price
                </th>
                <th scope="col" className="px-4 py-3">
                  Discount
                </th>
                <th scope="col" className="px-4 py-3">
                  Stock
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    {d}
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <img
                      className="w-[45px] h-[45px]"
                      src={`https://multivendor-shop-client.vercel.app/images/category/${d}.jpg`}
                      alt=""
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <span>Men's Premium soft..</span>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <span>Sports</span>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <span>Easy</span>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <span>$565</span>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <span>5%</span>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <span>10</span>
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <div className="flex items-center justify-start gap-4">
                      <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                        <FaEdit />
                      </Link>
                      <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                        <FaEye />
                      </Link>
                      <button className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end w-full mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={4}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountProducts;

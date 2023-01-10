import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import Router from "next/router";


const Search = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const searchHandler = () => {
        Router.push(`/market?artworkName=${searchQuery}`);
    }
    useEffect(() => {
        if (props.search) {
            setSearchQuery(props.search);
        }
        if (window.location.pathname !== "/market") {
            setSearchQuery("");
        }
    }, []);
    return (
        <div
            className={`flex-1 ${props.mobile ? "flex" : "hidden lg:flex"
                } border rounded-full overflow-hidden bg-white items-stretch`}
        >
            <form className="flex-1" onSubmit={(e) => e.preventDefault()}>
                <input
                    onKeyPress={(e) => {
                        if (e.key == "Enter") {
                            searchHandler();
                        }
                    }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="작품명 또는 작가명을 검색해보세요"
                    style={{ height: "50px" }}
                    autoComplete={"new-password"}
                    className="text-lg focus:outline-none font-[300] placeholder:font-noto placeholder:font-[300] placeholder:text-[#666] placeholder: border-l-0 w-full rounded-r-full px-4"
                />
            </form>
            <button
                onClick={searchHandler}
                className="bg-white text-[#666] px-4 text-2xl py-3"
            >
                <BiSearch />
            </button>
        </div>
    );
};

export default Search;

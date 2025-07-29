"use client";
import menu_data from "@/data/OnePageMenuData";
import Image from "next/image";
import Link from "next/link";

interface PageType {
    page: string;
}

const NavMenuTwo = ({ page }: PageType) => {

    return (
        <>
            {menu_data.filter((items) => items.page === page).map((menu) => (
                menu.mega_munu ? (
                    <li key={menu.id} className="has-megamenu">
                        <Link href={menu.link}>{menu.title}</Link>
                        <ul className="sub-menu mega-menu menu-image">
                            <li>
                                {menu.mega_munu.map((item) => (
                                    <div key={item.id} className="image text-center">
                                        <Image src={item.img} alt="image" />
                                        <div className="btn__group">
                                            <Link href={item.btn_link1} className="btn-one">{item.btn_1}</Link>
                                            {item.btn_link2 && <Link href={item.btn_link2} className="btn-one mt-2">{item.btn_2}</Link>}
                                        </div>
                                        <h6 className="text-white">{item.title}</h6>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </li>) : (
                    <li key={menu.id}>
                        <Link href={menu.link}>
                            {menu.title}
                        </Link>
                    </li>
                )
            ))}
        </>
    );
};

export default NavMenuTwo;

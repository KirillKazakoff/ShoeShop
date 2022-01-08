// import React from 'react';
// import { NavLink, Nav } from 'react-bootstrap';
// import { CategoryType } from '../../data/initContent';
// import type { CategoryClick } from './Main/Catalog';

// type FilteredListProps<DataT extends { id: number; title: string }> = {
//     data: DataT[];
//     onClick: () => any;
//     activeCategory: DataT;
// };

// export default function Categories<T extends { id: number; title: string }>(
//     props: FilteredListProps<T>,
// ) {
//     const { data, onClick, activeCategory } = props;

//     const categories = data.map((item) => (
//         <Nav.Item>
//             <NavLink
//                 id={item.id.toString()}
//                 onClick={onClick(item)}
//                 active={item.id === activeCategory.id}
//             >
//                 {item.title}
//             </NavLink>
//         </Nav.Item>
//     ));

//     return <Nav className='fs-4 mb-5 justify-content-center'>{categories}</Nav>;
// }

import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import sublinks from '../data';

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {
            //Mapping the pages, and their links in the sidebar
            sublinks.map((item, index) => {
              //deconstruct the item object so that I can put the link and page in their appropriate spots.
              const { links, page } = item;
              return (
                <article key={index}>
                  <h4>{page}</h4>
                  <div className='sidebar-sublinks'>
                    {links.map((link, index) => {
                      const { url, icon, label } = link;
                      return (
                        <a key={index} href={url}>
                          {icon}
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })
          }
        </div>
      </aside>
    </div>
  );
}

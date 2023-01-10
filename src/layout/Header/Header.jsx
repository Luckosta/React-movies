import styles from './Header.module.css';

function Header() {
   return (
      <div className={styles}>
         <nav className='purple darken-2'>
            <div className='nav-wrapper'>
               <a href='#' className='brand-logo center'>
                  React Movies
               </a>
               <ul id='nav-mobile' className='left hide-on-med-and-down'>
                  <li>
                     <a href='#'>Something</a>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}

export default Header;

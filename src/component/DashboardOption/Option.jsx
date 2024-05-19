import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowRight,faBell, faCalendar, faUserGroup  } from '@fortawesome/free-solid-svg-icons';

//List of options for setting the Options at header Dashboard
const OptionLists =[
  {icon: faUserGroup , nameOption:'Employee', value:'13',bg_icon_color:'#ff976a', bg_infor_color:'#FFA87D', bg_view_color:'#EF8759'},
  {icon: faBell , nameOption:'Notification', value:'26',bg_icon_color:'#08C080', bg_infor_color:'#10C888', bg_view_color:'#0F9E6C'},
  {icon: faCalendar , nameOption:'Day off', value:'6',bg_icon_color:'#ff6275', bg_infor_color:'#FF7588', bg_view_color:'#E3485B'},
] 

const Option = () => {
  return (
    <div className='grid grid-cols-3 w-full gap-5 place-items-center'>
      {OptionLists.map((option, index) => (
        <div className='relative flex w-80 h-52 text-white border-none overflow-hidden rounded-xl' key={index}>
          <div className='flex items-center justify-center w-2/6 h-full  text-6xl' style={{background:option?.bg_icon_color}}>
            <FontAwesomeIcon icon={option?.icon} />
          </div>
          <div className='flex items-center justify-center w-4/6 h-full text-xl' style={{background:option.bg_infor_color}}>
            <label className='grid grid-cols-1 place-items-center'>{option?.nameOption}
              <p>{option.value}</p>
            </label>
          </div>
          <div className=' absolute bottom-0  w-full flex items-center justify-center 'style={{background:option.bg_view_color}} >
            <Link to={'/'+option.nameOption.toLowerCase()}>view <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Option;
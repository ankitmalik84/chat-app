import React ,{useEffect} from 'react';

import {useAuth} from "@/context/authContext";
import { useRouter } from 'next/router';
import Loader from '@/component/Loader';
import LeftNav from '@/component/LeftNav';


const Home = () => {
  const router = useRouter();
  const {signOut,isLoading,currentUser} = useAuth();
  useEffect(()=>{
    if(!isLoading && !currentUser){
      router.push("/login");
    }
  },[currentUser,isLoading])
  return !currentUser ? 
    <Loader/>
  : (
    // <div>
    //   <button onClick={signOut}>Sign Out</button>
    // </div>

    <div className='bg-c1 flex h-[100vh]'>
      <div className='flex w-full shrink-0'>
        <LeftNav/>
        <div className='flex bg-c2 grow'>
          <div>SideBar</div>
          <div>Chat</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react'
import { doctors } from './../../assets/data/doctors';
import DoctorCard from './DoctorCard';
import { Base_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData';
import Loader from '../../components/Loader/Loading';
import Error from '../Error/Error';

const DoctorList = () => {

    const {data: doctors, loading, error} = useFetchData(`${Base_URL}/doctors`);

  return (
  <>
  {loading && <Loader/>}
  {error && <Error/>}

    { !loading && !error && (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {doctors.map(doctor=> (
        <DoctorCard key={doctor.id} doctor={doctor}/>
        ))}
    </div>
  )}
    </>
  );
};

export default DoctorList
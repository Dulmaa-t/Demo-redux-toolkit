import {ImSpinner9} from 'react-icons/im';
export default function Loading(){
    return <div className="w-full h-full bg-gray-50 bg-opacity-70 animate-pulse flex items-center justify-center">
        <div className='animate-spin text-3xl'>
            <ImSpinner9/>
        </div>
    </div>
}
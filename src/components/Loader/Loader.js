import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrap } from './LoaderWrap.styled';

export const Loader=()=>{
    return (
      <LoaderWrap>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </LoaderWrap>
    );
}
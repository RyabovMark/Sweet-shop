import React from 'react';
import {Box, Skeleton} from "@mui/material";

const SkeletonItem = () => {

  return (
    <Box p='10px'>
      <Skeleton variant="rounded" width={469} height={500}
                sx={{mb: '20px'}}/>
      <Skeleton variant="text" width={469} sx={{fontSize: '25px', mb: '20px'}}/>
      <Skeleton variant="rounded" width={469} height={120}
                sx={{mb: '10px'}}/>
      <Skeleton variant="rounded" width='50%' height={30}
                sx={{mb: '10px'}}/>
      <Skeleton variant="rounded" width='50%' height={30}
                sx={{mb: '10px'}}/>
      <Skeleton variant="rounded" width='50%' height={47}/>
    </Box>
  );
}

export default SkeletonItem
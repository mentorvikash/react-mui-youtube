import React, { useEffect, useState } from "react";
import { Stack, Skeleton, Box, Typography, Avatar } from "@mui/material";

export default function MuiSkleton() {
  const [isloading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 4000);
  }, []);

  return (
    <Box>
      {/* <Stack pb={2} spacing={2}>
        <Skeleton variant="text"></Skeleton>
        <Skeleton variant="circular" width={200} height={200}></Skeleton>
        <Skeleton variant="rectangular" width={500} height={200}></Skeleton>
        <Skeleton variant="rounded" width={500} height={200}></Skeleton>
      </Stack>
      <Stack spacing={2} pb={2}>
        <Skeleton
          variant="rounded"
          animation="wave"
          width={500}
          height={200}
        ></Skeleton>
      </Stack> */}
      <Stack spacing={1}>
        <Typography>Practical Example</Typography>
        {isloading ? (
          <Skeleton variant="rectangular" width={400} height={200} />
        ) : (
          <img
            src="https://source.unsplash.com/random/"
            alt="random image"
          ></img>
        )}
        <Stack direction={"row"} spacing={2} width={"100%"}>
          {isloading ? (
            <Skeleton variant="circular" width={40} height={40} />
          ) : (
            <Avatar>RC</Avatar>
          )}
          <Stack spacing={1} width={"80%"}>
            {isloading ? (
              <>
                <Typography>
                  <Skeleton variant="text" width={"100%"} />
                </Typography>
                <Typography>
                  <Skeleton variant="text" width={"100%"} />
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="h5"> Our Title</Typography>
                <Typography variant="body2" color={"text.secondary"}>
                  Our body description so it should to long.
                </Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

// Note Skeleton is used to show loding state of any component.
// import Skeleton from mui

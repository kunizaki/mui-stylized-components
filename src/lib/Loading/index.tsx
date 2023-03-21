/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';

const Loading = (props: any) => {
    const { loading, informations } = props;
    const [index, setIndex] = useState(0);

    const texts = informations ?? ["Aguarde..."];    
    const handleIndexChange = () => {
        setIndex((index + 1) % texts.length);
    };

    useEffect(() => {
        setTimeout(() => {
            handleIndexChange();
        }, 2000)
    }, [index])

    return (    
        <Backdrop
            sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(10, 10, 10, 0.5)', zIndex: 20000 }}
            open={loading}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CircularProgress color="primary" size={60} />
                
                <Box sx={{ maxHeight: '100px', overflow: 'auto' }}>
                    <Typography variant="body1" style={{ color: "white", padding: 20 }}>
                        {texts[index]}
                    </Typography>
                </Box>
            </Box>
        </Backdrop>
    
    );
}

export default Loading;
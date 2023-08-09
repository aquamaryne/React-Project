import React, { useState } from 'react';
import { Card, Grid, Typography } from "@mui/material";

const FirstPage = () => {

    const[content, setContent] = useState([]);

    return(
        <Grid>
            {content.map((cont) => (
                <Card>
                    
                </Card>
            ))}
        </Grid>
    )
};
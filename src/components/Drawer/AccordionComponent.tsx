import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Checkbox, FormGroup, FormControlLabel, ListItemButton, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { History } from "../data/history";

interface AccordionComponentProps {
    data?: History[];
    selectedUsers: Set<string>;
    handleCheckboxChange: (user: string) => void;
}

export const AccordionComponent: React.FC<AccordionComponentProps> = ({ data, selectedUsers, handleCheckboxChange }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    
    return (
        <Accordion expanded={open} onChange={handleClick}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <ListItemButton>
                    <ListItemText primary="Autores" />
                </ListItemButton>
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup>
                    {data?.map((item) => (
                        <FormControlLabel
                            key={item.id}
                            control={
                                <Checkbox
                                    checked={selectedUsers.has(item.user)}
                                    onChange={() => handleCheckboxChange(item.user)}
                                />
                            }
                            label={item.user}
                        />
                    ))}
                </FormGroup>
            </AccordionDetails>
        </Accordion>
    );
}

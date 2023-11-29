import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Checkbox, FormGroup, FormControlLabel, ListItemButton, LinearProgress, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { History } from "../data/history";

interface AccordionComponentProps {
    data?: History[];
    open: boolean;
    handleClick: () => void;
    selectedUsers: Set<string>;
    handleCheckboxChange: (user: string) => void;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ data, open, handleClick, selectedUsers, handleCheckboxChange }) => {
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

export default AccordionComponent;

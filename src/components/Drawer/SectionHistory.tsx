import { useState, Suspense, useEffect } from 'react';
import Avatar from '@mui/material/Avatar'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent'
import { Box, LinearProgress, ListItemText } from '@mui/material'
import { Accordion, AccordionSummary, AccordionDetails, Checkbox, FormGroup, FormControlLabel, ListItemButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import CardHistory from './CardHistory';
import { useQuery } from '@tanstack/react-query';
import historyService from './historyService';

enum Order {
    Ascending = 'asc',
    Descending = 'desc',
}

const SectionHistory = () => {
    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState(Order.Ascending);
    const { data, refetch } = useQuery({
        queryKey: ['historyData', order],
        queryFn: () => historyService.fetchHistoryData(),
    });
    const [selectedUsers, setSelectedUsers] = useState<Record<string, boolean>>({});

    const handleCheckboxChange = (user: string) => {
        setSelectedUsers((prevSelectedUsers: Record<string, boolean>) => ({
            ...prevSelectedUsers,
            [user]: !prevSelectedUsers[user],
        }));
    };
    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const sortedHistory = data
        ?.filter((item) => selectedUsers[item.user])
        .slice()
        .sort((a, b) => {
            if (order === Order.Ascending) {
                return new Date(a.time).getTime() - new Date(b.time).getTime();
            }

            return new Date(b.time).getTime() - new Date(a.time).getTime();
        });

    useEffect(() => {
        if (data) {
            const initialSelectedUsers = data.reduce(
                (acc: { [x: string]: boolean }, item: { user: string | number }) => {
                    acc[item.user] = true;
                    return acc;
                },
                {} as { [key: string]: boolean }
            );

            setSelectedUsers(initialSelectedUsers);
        }
    }, [data]);

    const handleChangeOrder = () => {
        setOrder((prevOrder) =>
            prevOrder === Order.Ascending ? Order.Descending : Order.Ascending
        );
        refetch();
    };
    return (
        <>
            <Suspense fallback={<LinearProgress />}>
                <Box sx={{ display: 'flex', flexDirection: 'row', mb: 3 }}>
                    {data?.map((item) => (
                        <Avatar
                            key={item.id}
                            alt={item.user}
                            src={`/static/images/avatar/${item.avatar}.jpg`}
                            sx={{ ml: 0.5 }}
                        />
                    ))}
                </Box>
            </Suspense>
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
                                        checked={selectedUsers[item.user]}
                                        onChange={() => handleCheckboxChange(item.user)}
                                    />
                                }
                                label={item.user}
                            />
                        ))}
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                    },
                }}
            >
                <Button onClick={handleChangeOrder}>
                    {order === Order.Ascending
                        ? 'Ordenar de manera descendente'
                        : 'Ordenar de manera ascendente'}
                </Button>
                {sortedHistory?.map((item) => (
                    <TimelineItem key={item.id}>
                        <TimelineOppositeContent>
                            <Suspense fallback={<LinearProgress />}>
                                {item.time.toLocaleString()}
                            </Suspense>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Suspense fallback={<LinearProgress />}>
                                <CardHistory
                                    avatar={item.avatar}
                                    user={item.user}
                                    action={item.action}
                                    sustain={item.sustain}
                                />
                            </Suspense>
                        </TimelineContent>
                    </TimelineItem>
                ))}

            </Timeline>
        </>
    )
}

export default SectionHistory
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
import { History } from '../data/history'
import { Collapse, LinearProgress, ListItemText } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Button from '@mui/material/Button';
import CardHistory from './CardHistory';

enum Order {
    Ascending = 'asc',
    Descending = 'desc',
}

const SectionHistory = () => {
    const [order, setOrder] = useState(Order.Ascending);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<History[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<{ [key: string]: boolean }>({});
    const handleCheckboxChange = (user: string) => {
        setSelectedUsers((prevSelectedUsers: Record<string, boolean>) => ({
            ...prevSelectedUsers,
            [user]: !prevSelectedUsers[user],
        }));
    };
    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const toggleOrder = () => {
        setOrder(order === Order.Ascending ? Order.Descending : Order.Ascending);
    };

    const sortedHistory = data.filter((item) => selectedUsers[item.user]).slice().sort((a, b) => {
        if (order === Order.Ascending) {
            return a.time.localeCompare(b.time);
        }
        return b.time.localeCompare(a.time);
    });

    useEffect(() => {
        fetch('/api/history')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                const initialSelectedUsers = data.reduce((acc: { [x: string]: boolean; }, item: { user: string | number; }) => {
                    acc[item.user] = true;
                    return acc;
                }, {} as { [key: string]: boolean });
                setSelectedUsers(initialSelectedUsers);

            })
            .catch((error) => {
                console.error('Error al obtener datos:', error);
            });
    }, []);

    return (
        <>
            <Suspense fallback={<LinearProgress />}>
                {data.map((item) => (
                    <Avatar
                        key={item.id}
                        alt={item.user}
                        src={`/static/images/avatar/${item.avatar}.jpg`}
                    />
                ))}
            </Suspense>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Autores" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <FormGroup>
                    {data.map((item) => (
                        <FormControlLabel
                            key={item.id}
                            control={<Checkbox
                                checked={selectedUsers[item.user]}
                                onChange={() => handleCheckboxChange(item.user)}
                            />}
                            label={item.user}
                        />
                    ))}
                </FormGroup>
            </Collapse>

            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.2,
                    },
                }}
            >
                <Button onClick={toggleOrder}>
                    {order === Order.Ascending ? 'Ordenar de manera descendente' : 'Ordenar de manera ascendente'}
                </Button>
                {sortedHistory.map((item) => (
                    <TimelineItem key={item.id}>
                        <TimelineOppositeContent>
                            <Suspense fallback={<LinearProgress />}>{item.time}</Suspense>
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
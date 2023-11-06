import { useState } from 'react';
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent'
import { HISTORY } from '../data/history'
import { Suspense, lazy } from 'react'
import { Collapse, LinearProgress, ListItemText } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const CardHistory = lazy(() => import('./CardHistory'))

const removeDuplicates = () => {
  const uniqueUsers = new Set();
  return HISTORY.filter((item) => {
    if (!uniqueUsers.has(item.user)) {
      uniqueUsers.add(item.user);
      return true;
    }
    return false;
  });
};

const SectionHistory = () => {
  const uniqueHistory = removeDuplicates();
  const [order, setOrder] = useState('asc');
  const initialSelectedUsers = uniqueHistory.reduce((acc, item) => {
    acc[item.user] = true;
    return acc;
  }, {} as { [key: string]: boolean });
  const [open, setOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<{ [key: string]: boolean }>(initialSelectedUsers);
  const handleClick = () => {
    setOpen(!open);
  };
  const toggleOrder = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc');
  };
  const handleCheckboxChange = (user: string) => {
    setSelectedUsers((prevSelectedUsers: Record<string, boolean>) => ({
      ...prevSelectedUsers,
      [user]: !prevSelectedUsers[user],
    }));
  };
  const sortOrderText = order === 'asc' ? 'Ordenar de manera descendente' : 'Ordenar de manera ascendente';
  const filteredHistory = HISTORY.filter((item) => selectedUsers[item.user]);
  const sortedHistory = filteredHistory.slice().sort((a, b) => {
    if (order === 'asc') {
      return a.time.localeCompare(b.time);
    } else {
      return b.time.localeCompare(a.time);
    }
  });
  return (
    <>
      {/* LISTA DE USUARIOS */}
      <Suspense fallback={<LinearProgress />}>
        <AvatarGroup max={10}>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
      </Suspense>

      {/* LINEA DE TIEMPO */}
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Autores" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FormGroup>
          {uniqueHistory.map((item, index) => (
            <FormControlLabel
              key={index}
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
        <button onClick={toggleOrder}>{sortOrderText}</button>
        {sortedHistory.map((item, index) => (

          <TimelineItem key={index}>
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
                  user={item.user}
                  action={item.action}
                  sustento={item.sustento}
                  time={item.time}
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
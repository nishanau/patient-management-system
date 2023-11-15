import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Appointments = () => {

    const appointmentDetails = [
        { name: "Upcoming Appointment",
            date: "31/10/2023" },
            { name: "Previous Appointment",
            date: "15/09/2023" },
        { name: "Prescriptions",
            date: "31/10/2023" },
      ];

    return (
        <div className='flex p-1'>
        {appointmentDetails.map((appointment, index) => (
          <div className="flex-1" key={index}>
            <Card className='m-1'>
              <CalendarMonthIcon />
              <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                  {appointment.name}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {appointment.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small">View</Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>


    );
}

export default Appointments

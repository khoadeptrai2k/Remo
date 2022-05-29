import faker from 'faker';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'boxicons'
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: "100%",
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        color: 'black',
        width: '15%'
    
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));

let USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];
for(let i=0;i<14;i++) {
    USERS[i] = {
        id: faker.internet.color(),
        item: faker.commerce.product(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        joinDate: faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

const Expense = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <h1>Expenses</h1>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>EXP ID</TableCell>
            <TableCell className={classes.tableHeaderCell}>ITEM</TableCell>
            <TableCell className={classes.tableHeaderCell}>ORDER BY</TableCell>
            <TableCell className={classes.tableHeaderCell}>DATE</TableCell>
            <TableCell className={classes.tableHeaderCell}>FROM</TableCell>
            <TableCell className={classes.tableHeaderCell}>STATUS</TableCell>
            <TableCell className={classes.tableHeaderCell}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.name}>
                 <TableCell>
                  <Grid container>
                      <Grid item lg={10}>
                          <Typography className={classes.id}>{row.id}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>

                <TableCell>
                  <Grid container>
                      <Grid item lg={10}>
                          <Typography className={classes.item}>{row.item}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
                
                <TableCell>
                  <Grid container>
                      <Grid item lg={10}>
                          <Avatar alt={row.name} src='.' className={classes.avatar}/>
                          <Typography className={classes.name}>{row.name}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>

                <TableCell>{row.joinDate}</TableCell>

                <TableCell>
                  <Typography color="textSecondary" variant="body2">{row.company}</Typography>
                </TableCell>
                
                <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'Active' && 'green') ||
                        (row.status === 'Pending' && 'blue') ||
                        (row.status === 'Blocked' && 'orange'))
                    }}
                  >{row.status}</Typography>
                </TableCell>

                <TableCell>
                    <box-icon type='solid' name='edit'></box-icon>
                    <box-icon type='solid' name='trash'></box-icon>
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
        <TableFooter >
        <TablePagination style={{width:'200%'}}
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
    </>
  );
}

export default Expense;
import React, { useState, useEffect, useForm } from 'react';
import axiosAPI from '../../API/ourAPI/API';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CategorySelector from './CategorySelector';
import QualitySelector from './QualitySelector';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }));

  
export default function AddressForm({ parentCallback }) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    //const [form, handleSubmit] = useForm();
    const [name, setName] = useState('123');
    const [description, setDescription] = useState();
    const [itemCategory, setItemCategory] = useState();
    const [itemQuality, setItemQuality] = useState();
    
    function handleCategoryChange(value){
      setItemCategory(value);
    }
    function handleQualityChange(value){
      setItemQuality(value);
    }
    const handleSubmit = data =>{
      axiosAPI.post('https://my-tool-your-tool-dev.herokuapp.com/offers/add-offer', 
      {
        categoryId: itemCategory,
        description: description,
        toolName: name,
        toolQuality: itemQuality
      })
      .then(res => {
        console.log('Dodano ofertę!')
      })
      .catch(err => {
        console.log(err.value)
      })
    }

  return (
    <form className={classes.root} noValidate autoComplete="off">
    <React.Fragment>
        <br></br>
      <Grid container spacing={3}>
         <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            id="name"
            name="name"
            label="Name of the offer"
            fullWidth
          />
        </Grid>
      <Grid item xs={12}>
          <TextField
            required
            variant="outlined"
            value={description}
            onChange={e => setDescription(e.target.value)}
            id="description"
            name="description"
            label="Description of the item"
            multiline
            rows={10}
            rowsMax={10}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
        <CategorySelector setCategory={handleCategoryChange}/>
        <QualitySelector setQuality={handleQualityChange}/>
        </Grid>
        <Grid item xs={6}>
            <br></br><br></br><br></br><br></br><br></br><br></br>
        <Button onClick={handleSubmit} size = 'large' variant = "contained" type="button" fullWidth  color = "primary" > Add</Button>
        </Grid>
        </Grid>
    </React.Fragment>
    </form>
  );
}
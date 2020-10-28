import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
    },
    inputTodo: {
        width: '100%',
    },
    ul: {
        textAlign: "center",
        fontSize: "30px",
        listStyle: "none",
    },
    li: {
        paddin: "20px",
    },
    paper: {
        width: '100%',
        wordWrap: '-moz-initial'
    },
}));



const Todolist = () => {
    const classes = useStyles();

    const [todos, setTodos] = React.useState([]);
    const [tmpTodo, setTmpTodo] = React.useState("");
    const [deletes, setDeletesTodos] = React.useState([]);
    const [deleteTodoName, setDeleteTodoName] = React.useState("");

    const addTodo = () => {
        if (tmpTodo === "") {
            alert("文字を入力してください");
            return;
        }
        setTodos([...todos, tmpTodo]);
        localStorage.setItem('todos', JSON.stringify([...todos, tmpTodo]));
        setTmpTodo("");

    };

    const deleteTodo = index => {
        const newTodos = todos.filter((todo, todoIndex) => {
            if (index === todoIndex) {
                setDeletesTodos([...deletes, todo]);
                localStorage.setItem('todoDeletes', JSON.stringify([...deletes, todo]));
            };
            return index !== todoIndex;
        });
        setTodos(newTodos);

        localStorage.setItem('todos', JSON.stringify(newTodos));


    }

    const deleteDeleteLast = index => {
        const lestTodos = deletes.filter((todo, todoLast) => {
            return index !== todoLast;
        });
        setDeletesTodos(lestTodos);
        localStorage.setItem('todoDeletes', JSON.stringify(lestTodos));

    }

    React.useEffect(
        () => {
            const localStorageTodos = JSON.parse(localStorage.getItem('todos'));
            if (localStorageTodos) {
                setTodos(localStorageTodos);

            }

            const localStorageTodosDletes = JSON.parse(localStorage.getItem('todoDeletes'));
            if (localStorageTodosDletes) {
                setDeletesTodos(localStorageTodosDletes);

            }

        }, []);



    return (
        <Card className={classes.root}>
            <ListItem>
                <ListItemText primary="ToDo" />
            </ListItem>
            <TextField className={classes.inputTodo} id="standard-basic" label="Standard" value={tmpTodo} onChange={e => setTmpTodo(e.target.value)}
                onKeyPress={e => {
                    if (e.key == 'Enter') {
                        addTodo();
                        e.preventDefault();
                    }
                }} />
            <ListItem>
                <ListItemText primary="To" />
            </ListItem>
            {todos.map((todo, index) => {
                return <li key={index} className={classes.li}>
                    <Paper elevation={3} >
                        <div className={classes.paper}>
                            {todo}
                            <Button variant="outlined" color="primary" size="small" onClick={() => deleteTodo(index)}><DeleteIcon /></Button>
                        </div>
                    </Paper>
                </li>;
            })}
            <ListItem>
                <ListItemText primary="Do" />
            </ListItem>
            {deletes.map((todo, index) => {
                return <li key={index} className={classes.li}>
                    <Paper elevation={3}>
                        {todo}
                        <Button variant="outlined" color="primary" onClick={() => deleteDeleteLast(index)} ><DeleteIcon /></Button>
                    </Paper>
                </li>;
            })}
        </Card>
    );
}

export default Todolist;

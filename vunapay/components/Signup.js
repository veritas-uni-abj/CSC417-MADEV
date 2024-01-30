import React, { useState } from 'react';
import { StyleSheet,View, TextInput,Text, Button, Pressable } from 'react-native';
const Signup = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[username,setUsername]=useState('');
    const[matric_num,setmatric_num]=useState('');
    const[phone_num,setphone_num]=useState('');

    const handleSignup =async () => {
        try{
    await firebase.auth().createUserWithEmailAndPassword
    (email,password);
        }

        catch(error){
            console.log("signup error",error.message);
        }
        
    };

    return (
        <View style={styles.containers}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />

            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                />

                <TextInput
                placeholder="Matric Number"
                value={matric_num}
                onChangeText={setmatric_num}
                style={styles.input}
                />

                <TextInput
                placeholder="Phone Number"
                value={phone_num}
                onChangeText={setphone_num}
                style={styles.input}
                />

            <Button title="Sign Up" onPress={handleSignup} />
            <Pressable onPress={()=>navigation.navigate('login')}>
                <Text>Already have an account? Login </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
});
export default Signup;

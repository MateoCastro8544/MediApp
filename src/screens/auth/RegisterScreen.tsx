//native Imports
import React from 'react';
import { View } from 'react-native';
//hooks
import usePassword from '../../hooks/usePassword';
//components
import LogoAuthComponent from '../../components/authComponent/LogoAuthComponent';
import InputAuthComponent from '../../components/authComponent/InputAuthComponent';
import ButtonAuthComponent from '../../components/authComponent/ButtonAuthComponent';
//navigation
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../../hooks/useForm';
import { ScrollView } from 'react-native-gesture-handler';


interface Props extends StackScreenProps<any,any>{}

const url:string = 'https://images.emojiterra.com/google/android-pie/512px/2695.png';


const RegisterScreen = ({navigation}:Props) => {

    const {hidePassword,hidePasswordIcon,showPassword,hideReafirmPassword,showReafirmPassword,hideReafirmPasswordIcon} = usePassword();
    const {nombre,correo,password,onChange} = useForm({
        nombre:'',
        correo: '',
        password: '',
    });


    const onLogin = ()=>{
        console.log({nombre,correo, password});
    };

  return (

    <ScrollView className='flex-1 bg-slate-200 '>


        {/* // <View className="flex-1 bg-slate-200 justify-center items-center"> */}

        <View className="h-5/6 w-full mt-8">


            <LogoAuthComponent urlImage={url} institutionName="Name of Institution"/>

            <View className="mt-2 items-center ">
                <InputAuthComponent
                    icon={{color:'#999999',firstIcon:'person-outline',size:15}}
                    placeholder="Nombre"
                    onChangeText={(value)=> onChange(value,'nombre')}
                    value={nombre}
                    onSubmitionEditing={onLogin}
                    />
                <InputAuthComponent
                    icon={{color:'#999999',firstIcon:'person-outline',size:15}}
                    placeholder="Apellido"
                    />
                <InputAuthComponent
                    icon={{color:'#999999',firstIcon:'at-outline',size:15}}
                    placeholder="Correo"
                    onChangeText={(value)=> onChange(value,'correo')}
                    value={correo}
                    onSubmitionEditing={onLogin}
                    />
                <InputAuthComponent
                    icon={{color:'#999999',firstIcon:'lock-closed-outline',size:15,secondIcon:`${hidePasswordIcon}`}}
                    placeholder="Contraseña"
                    hidePassword={hidePassword}
                    showPassword={showPassword}
                    onChangeText={(value)=> onChange(value,'password')}
                    value={password}
                    onSubmitionEditing={onLogin}
                    />
                <InputAuthComponent
                    icon={{color:'#999999',firstIcon:'checkmark-done-outline',size:15, secondIcon:`${hideReafirmPasswordIcon}`}}
                    placeholder="Confirmar contraseña"
                    hidePassword={hideReafirmPassword}
                    showPassword={showReafirmPassword}
                    />
            </View>

            <View className="items-center mt-8">
                <ButtonAuthComponent
                    buttonName="Registrarse"
                    textStyle="text-white"
                    touchableStyle="border-2 border-blue-600 w-10/12 h-10 rounded-xl items-center justify-center bg-blue-500"
                    // navigation={()=>navigation.navigate('LoginScreen')}
                    onPress={()=>navigation.navigate('LoginScreen') }
                    />
            </View>
            <View className="items-center">
                <ButtonAuthComponent
                    buttonName="Iniciar Sesion"
                    textStyle="text-blue-700 underline mt-5"
                    touchableStyle=""
                    onPress={()=>navigation.navigate('LoginScreen')}
                    />
            </View>

        </View>

    {/* // </View> */}
</ScrollView>
  );
};

export default RegisterScreen;

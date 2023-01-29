import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import { COLLECTION_COMPLAINT } from '../../configs/database';
import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';

import Notify from '../../assets/svg/notify.svg';

type ComplaintProps = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  photos: string[];
  status: string;
  company: CompanyProps;
  level: 'low' | 'medium' | 'high';
}

type CompanyProps = {
  id: string;
  name: string;
  email: string;
  cnpj: string;
  phone: string;
  complaints: ComplaintProps[];
}

export function Home() {
  // const [category, setCategory] = useState('');
  // const [loading, setLoading] = useState(true);
  // const [complaints, setComplaints] = useState<ComplaintProps[]>([]);

  // const navigation = useNavigation();

  // async function loadComplaints() {
  //   const response = await AsyncStorage.getItem(COLLECTION_COMPLAINT);
  //   const storage: ComplaintProps[] = response ? JSON.parse(response) : [];

  //   setComplaints(storage)

  //   setLoading(false);
  // }

  // useFocusEffect(useCallback(() => {
  //   loadComplaints();
  // }, [category]));

  // const handleAppointmentCreate = useCallback(() => {
  //   navigation.navigate('AppointmentCreate');
  // }, []);

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        {/* <Notify
          width={40}
          height={40}
        /> */}
      </View>
    </Background>
  );
}
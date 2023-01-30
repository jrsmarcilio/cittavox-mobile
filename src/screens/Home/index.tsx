import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';

import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import { Search } from '../../components/Search';
import { BannerWelcome } from '../../components/BannerWelcome';

import { defaultOptions } from '../../utils/homeOptions';
import { styles } from './styles';

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
        <Search />
        <BannerWelcome />

        <SafeAreaView style={styles.options}>
          <FlatList
            data={defaultOptions.data}
            keyExtractor={item => String(item.id)}
            numColumns={2}
            columnWrapperStyle={styles.rowWrapper}
            renderItem={({ item }) => {
              return (
                <View key={item.id} style={styles.item}>
                  <item.IconSvg width={34} height={34} />
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              );
            }}
          />
        </SafeAreaView>

      </View>
    </Background>
  );
}
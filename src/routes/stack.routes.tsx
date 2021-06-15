import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { ComparationHistory } from '../pages/ComparationHistory';
import { NewComparation } from '../pages/NewComparation';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.background
            }
        }}>
        <stackRoutes.Screen
            name="Welcome"
            component={NewComparation}
        />

        <stackRoutes.Screen
            name="ComparationHistory"
            component={ComparationHistory}
        />

        <stackRoutes.Screen
            name="NewComparation"
            component={NewComparation}
        />

        <stackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;

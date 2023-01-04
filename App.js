import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { colors } from './src/theme/color'
import { spacing } from './src/theme/spacing'
import { useFonts } from 'expo-font'
import { typography } from './src/theme/typography'
import Text from './src/components/text/text'
export default function App() {
    const [loaded] = useFonts({
        'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
        'Antonio-Bold': require('./assets/fonts/Antonio-Bold.ttf'),
        'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
        'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf')
    })

    if (!loaded) {
        return <Text>Text is Loading</Text>
    }
    return (
        <View style={styles.container}>
            <Text preset="h2" style={{color:"red"}}>Open up App.js to start working on your app!</Text>
            <Text style={{
                marginTop: spacing[2],
                fontFamily:"LeagueSpartan-Regular"
            }}>This is my first react native app</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

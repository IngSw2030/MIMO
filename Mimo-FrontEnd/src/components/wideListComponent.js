import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const WideListComponent = props => {
	return (
		<View style={styles.pageStyle}>
			<View>
				<Text style={styles.titleStyle}>{props.title} WideScreen ' '</Text>
			</View>
			<View>
				<FlatList
					keyExtractor={item => item.id}
					data={props.list}
					renderItem={({ item }) => props.componentToRender(item.id)}
				/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 20,
		fontWeight: 'bold',
	},

	pageStyle: {
		flex: 1,
	},
});

export default WideListComponent;

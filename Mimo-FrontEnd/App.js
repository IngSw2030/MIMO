//redux y sockets
import React, { useEffect, useContext } from 'react';
import { Provider as ChatProvider } from 'react-redux';
import AppContainer from './AppContainer';
import { setNavigator } from './src/navigationRef';
//contextos
import { Provider as PetContext } from './src/context/PetContext';
import { Provider as ProductContext } from './src/context/ProductContext';
import { Provider as PurchaseContext } from './src/context/PurchaseContext';
import { Provider as PostContext } from './src/context/PostContext';
import { Provider as PetProvider } from './src/context/PetContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as UserProvider } from './src/context/UserContext';
import { Provider as ShoppingCartProvider } from './src/context/ShoppingCartContext';
import { Provider as SellsProvider } from './src/context/SellsContext';
import { Provider as VetsProvider } from './src/context/VetContext';

import { Context as UserContext } from './src/context/UserContext';

import store from './src/context/ChatContext';


export default () => {


	return (
		<VetsProvider>
			<SellsProvider>
				<ShoppingCartProvider>
					<PostContext>
						<ProductContext>
							<PurchaseContext>
								<PetProvider>
									<ChatProvider store={store}>
										<UserProvider>
											<AuthProvider>
												<AppContainer
													ref={navigator => {
														setNavigator(navigator);
													}}
												/>
											</AuthProvider>
										</UserProvider>
									</ChatProvider>
								</PetProvider>
							</PurchaseContext>
						</ProductContext>
					</PostContext>
				</ShoppingCartProvider>
			</SellsProvider>
		</VetsProvider>
	);
};

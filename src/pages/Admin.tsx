import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { createBook } from '../graphql/mutations'
import config from '../aws-exports'

import StyledAdmin from '../styles/admin.styles';
import StyledForm from '../components/Form/form.styles';
import StyledInputGroup from '../components/Form/input.styles';

import { Book } from '../typesLibrary';

import sampleBookImage from '../asset/bookSample.jpg'

const {
	aws_user_files_s3_bucket_region: region,
	aws_user_files_s3_bucket: bucket
} = config


const Admin = () => {

	const [image, setImage] = useState<string | null>(null)
	const [bookDetails, setBookDetails] = useState<Book>({id: '', title: '', image: '', author: '', price: '', description: '', featured: false})

	const handleOnChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, name: keyof Book) => {
		e.preventDefault()
		if (name === 'featured'){
			setBookDetails(prev => {
				const newState = {...prev}
				return {...newState, featured: !prev.featured}
			})
			return
		}
		const newValue = e.currentTarget.value
		setBookDetails(prev => {
			const newState = {...prev}
			newState[name] = newValue
			return newState
		})
	}

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		try{
			if(!bookDetails || !bookDetails.price) return
			await API.graphql(graphqlOperation(createBook, { input: bookDetails}))
			setBookDetails({id: '', title: '', image: '', author: '', price: '', description: '', featured: false})
		} catch (err) {
			console.log('error creating new book', err)
		}
	}

	const handleImageUpload = async (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault()
		if (!e.currentTarget.files) return
		const file = e.currentTarget.files[0]
		const extension = file.name.split('.')[1]
		const name = file.name.split('.')[0]
		const key = `images/${uuidv4()}${name}.${extension}`
		const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`

		try {
			await Storage.put(key, file, {
				level: 'public',
				contentType: file.type
			})

			const image = await Storage.get(key, { level: 'public'})
			setImage(image)
			setBookDetails(prev => ({...prev, image: url}))
		} catch (err) {
			console.log('error uploading image', err)
		}

	}

	return (
		<StyledAdmin>
			<Authenticator>
			{({ signOut, user}) => (
				<>
					<div className='header-like'>
							<h3>Add New Book</h3>
							<button className='btn-like' onClick={signOut}>Sign Out</button>
					</div>

						<StyledForm onSubmit={handleSubmit}>

						<div className='image-field'>
							{image ? 
								<img src={sampleBookImage} alt=''/> 
								:
								<input 
								type='file' 
								accept='image/jpg' 
								onChange={(e) => handleImageUpload(e)} 
								/>
							}
						</div>
						<div className='form-field'>
							<StyledInputGroup>
								<p><label htmlFor='title'>Title</label></p>
								<p><input 
											id='title'
											type='text'
											name='title'
											placeholder='Type the title'
											onChange={(e) => handleOnChange(e, 'title')}
											required
										/>
								</p>
							</StyledInputGroup>
							<StyledInputGroup>
								<p><label htmlFor='description'>Description</label></p>
								<p><textarea 
											id='description'
											name='description'
											rows={8}
											placeholder='Type the description of the book'
											onChange={(e) => handleOnChange(e, 'description')}
											required
										/>
								</p>
							</StyledInputGroup>
							<StyledInputGroup>
								<p><label htmlFor='author'>Author</label></p>
								<p><input 
											id='author'
											type='text'
											name='author'
											placeholder='Type the author'
											onChange={(e) => handleOnChange(e, 'author')}
											required
										/>
								</p>
							</StyledInputGroup>
							<StyledInputGroup>
								<p><label htmlFor='price'>Price ($)</label></p>
								<p><input 
											id='price'
											type='text'
											name='price'
											placeholder='What is the Price of the book (USD)?'
											onChange={(e) => handleOnChange(e, 'price')}
											required
										/>
								</p>
							</StyledInputGroup>
							<StyledInputGroup>
								<p>
									<label>Featured?</label>
									<input 
											className='checkbox'
											type='checkbox'
											checked={bookDetails.featured!}
											onChange={(e) => handleOnChange(e, 'featured')}
										/>
								</p>
							</StyledInputGroup>
							<StyledInputGroup>
								<button className='btn-like' type='submit'>Submit</button>
							</StyledInputGroup>
						</div>
					</StyledForm>
				</>
				)}
			</Authenticator>
		</StyledAdmin>
	)
}

export default Admin
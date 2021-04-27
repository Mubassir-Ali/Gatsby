import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import * as styles from './projects.module.css';

const Projects = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {					
						id
						frontmatter {
							stack
							title
							slug
						}
					}
				}
			}
		}
	`);

	const projectList = data.allMarkdownRemark.edges;
	// console.log('Project List',projectList[0].node.fields.slug);
	
	return (
		<Layout>
			<div>
				<h1>Projects</h1>
				<div className={styles.projects}>
					{projectList.map((projectNode, index) => {
						return (
							<div className={styles.project_card}>
								<Link to={`/Projects/${projectNode.node.frontmatter.slug}`} key={projectNode.node.id}>
									<h2>{projectNode.node.frontmatter.title}</h2>
									<h5>{projectNode.node.frontmatter.stack}</h5>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</Layout>
	);
};

export default Projects;

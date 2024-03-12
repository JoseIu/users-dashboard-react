import IconButton from '../buttons/IconButton';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import style from './PageSelector.module.css';

const PageSelector = ({ page, setPage, totalPage }) => {
	const isFirstPage = page === 1;
	const isLastPage = page === totalPage || totalPage === 0;
	return (
		<div className={style.pagination__btns}>
			<IconButton
				kind='black'
				filled
				icon={ArrowLeftIcon}
				disabled={isFirstPage}
				value={page}
				onClick={() => setPage(page - 1)}
			/>
			<span>
				{page}/{totalPage || 1}
			</span>
			<IconButton
				kind='black'
				filled
				icon={ArrowRightIcon}
				disabled={isLastPage}
				value={page}
				onClick={() => setPage(page + 1)}
			/>
		</div>
	);
};

export default PageSelector;
